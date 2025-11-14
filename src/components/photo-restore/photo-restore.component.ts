import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface RestoreResponse {
  created: number;
  data: Array<{
    b64_json?: string;
    url?: string;
  }>;
  usage: {
    input_tokens: number;
    input_tokens_details: {
      image_tokens: number;
      text_tokens: number;
    };
    output_tokens: number;
    total_tokens: number;
  };
}

@Component({
  selector: 'app-photo-restore',
  standalone: true,
  templateUrl: './photo-restore.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoRestoreComponent {
  private http = inject(HttpClient);

  selectedFile = signal<File | null>(null);
  previewUrl = signal<string | null>(null);
  restoredImageUrl = signal<string | null>(null);
  isProcessing = signal(false);
  progress = signal(0);
  errorMessage = signal<string | null>(null);
  debugInfo = signal<string | null>(null);

  // System prompt - locked and cannot be changed by user
  private readonly SYSTEM_PROMPT = `Act as a professional photo restoration expert. Your task is to restore an old, low-resolution, blurry, and noisy photograph to the highest possible quality. The final result must be photorealistic, sharp, and clean while preserving the original character of the image.

Primary Objectives:
1. Upscale & Enhance: Increase the image resolution to 4K. Enhance the details with high fidelity, especially on faces and textures.
2. Sharpen & Deblur: Apply intelligent sharpening to correct blurriness and motion blur. Make all edges and details crisp and clear without creating a "halo" effect.
3. Denoise & Artifact Removal: Meticulously remove all digital noise, grain, and compression artifacts. The final image should be smooth and clean.
4. Lighting & Color Correction: Automatically correct poor lighting. Balance the shadows, mid-tones, and highlights to create a natural and vibrant look. Restore faded colors to their original state. If it is a black and white photo, enhance the contrast and dynamic range.
5. Detail & Texture Restoration: Restore fine details that were lost due to low resolution, such as skin texture, hair strands, and fabric patterns.

Constraints:
- Do not over-process: Avoid an unnatural, "plastic" look on skin.
- Do not alter composition: Do not add, remove, or change any subjects or elements in the original photo.
- Preserve authenticity: Maintain the nostalgic feel and emotional integrity of the original photograph.
- Do not add any new content or objects that were not in the original image.
- Do not change the structure, layout, or composition of the original image.

Final Output: A high-resolution (4K), ultra-detailed, sharp, and clean version of the provided image that looks like it was taken with a modern camera.`;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.errorMessage.set('Vui lòng chọn file ảnh hợp lệ');
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        this.errorMessage.set('Kích thước file không được vượt quá 10MB');
        return;
      }

      this.selectedFile.set(file);
      this.errorMessage.set(null);
      this.restoredImageUrl.set(null);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl.set(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  clearFile(): void {
    this.selectedFile.set(null);
    this.previewUrl.set(null);
    this.restoredImageUrl.set(null);
    this.errorMessage.set(null);
    this.progress.set(0);
  }

  async restorePhoto(): Promise<void> {
    const file = this.selectedFile();
    if (!file) {
      this.errorMessage.set('Vui lòng chọn ảnh trước');
      return;
    }

    this.isProcessing.set(true);
    this.errorMessage.set(null);
    this.progress.set(0);

    try {
      console.log('Starting photo restoration...');
      
      // Convert image to base64
      console.log('Converting image to base64...');
      const base64Image = await this.fileToBase64(file);
      console.log('Base64 conversion complete, length:', base64Image.length);
      this.progress.set(20);

      // Call API
      console.log('Calling restore API...');
      const response = await this.callRestoreAPI(base64Image);
      console.log('API response received');
      this.progress.set(80);

      // Extract image from response
      console.log('Extracting image from response...');
      const imageUrl = this.extractImageFromResponse(response);
      
      // Store debug info
      const dataInfo = response.data?.[0] ? 'Image data received' : 'No image data';
      this.debugInfo.set(`Response info: ${dataInfo}, Tokens used: ${response.usage?.total_tokens || 0}`);
      
      if (imageUrl) {
        console.log('Image extracted successfully, URL length:', imageUrl.length);
        this.restoredImageUrl.set(imageUrl);
        this.progress.set(100);
      } else {
        console.error('Failed to extract image from response');
        throw new Error('Không thể trích xuất ảnh từ phản hồi. Vui lòng kiểm tra thông tin debug bên dưới.');
      }
    } catch (error: any) {
      console.error('Error restoring photo:', error);
      
      let errorMsg = 'Đã có lỗi xảy ra khi xử lý ảnh. Vui lòng thử lại.';
      
      if (error.status === 401) {
        errorMsg = 'Lỗi xác thực API. Vui lòng kiểm tra API key.';
      } else if (error.status === 429) {
        errorMsg = 'Đã vượt quá giới hạn yêu cầu. Vui lòng thử lại sau.';
      } else if (error.status === 400) {
        errorMsg = 'Yêu cầu không hợp lệ. Vui lòng thử ảnh khác.';
      } else if (error.message) {
        errorMsg = error.message;
      }
      
      this.errorMessage.set(errorMsg);
      this.progress.set(0);
    } finally {
      this.isProcessing.set(false);
    }
  }

  private async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private async callRestoreAPI(base64Image: string): Promise<RestoreResponse> {
    // Call backend API - API keys are securely stored on backend only
    const response = await firstValueFrom(
      this.http.post<RestoreResponse>('/api/restore', { image: base64Image })
    );

    return response;
  }

  private extractImageFromResponse(response: RestoreResponse): string | null {
    try {
      console.log('Full API Response:', response);
      
      if (!response.data || response.data.length === 0) {
        console.error('No data in response');
        return null;
      }

      const imageData = response.data[0];
      
      // Check for b64_json format
      if (imageData.b64_json) {
        console.log('Found base64 image data, length:', imageData.b64_json.length);
        // Determine image type from the base64 data
        const base64Data = imageData.b64_json;
        const imageType = base64Data.startsWith('/9j/') ? 'jpeg' : 'png';
        
        return `data:image/${imageType};base64,${base64Data}`;
      }
      
      // Check for URL format
      if (imageData.url) {
        console.log('Found image URL:', imageData.url);
        return imageData.url;
      }

      console.error('No image data found in response');
      console.log('Image data:', imageData);
      return null;
    } catch (error) {
      console.error('Error extracting image:', error);
      return null;
    }
  }

  downloadImage(): void {
    const imageUrl = this.restoredImageUrl();
    if (!imageUrl) return;

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `restored_sharpened_${Date.now()}.png`;
    link.click();
  }
}
