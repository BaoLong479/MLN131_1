import { Injectable } from "@angular/core";
// FIX: Import PlacementTestQuestion to be used in the new method.
import {
    Chapter,
    QuizQuestion,
    PlacementTestQuestion,
    MultipleChoiceQuestion,
    MatchingQuestion,
} from "../models/content.model";

@Injectable({
    providedIn: "root",
})
export class ContentService {
    private chapters: Chapter[] = [
        {
            id: "chuong-1",
            title: "Chương 1: Nhập môn Chủ nghĩa Xã hội Khoa học",
            sections: [
                {
                    id: "1-1",
                    chapterTitle:
                        "Chương 1: Nhập môn Chủ nghĩa Xã hội Khoa học",
                    title: "1.1. Mục đích và Hoàn cảnh ra đời",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Việc học tập môn Chủ nghĩa Xã hội Khoa học nhằm đạt được các mục đích sau:",
                        },
                        {
                            type: "list",
                            items: [
                                "Kiến thức: Nắm được sự ra đời, nội dung, đối tượng, phương pháp và ý nghĩa của CNXHKH – một trong ba bộ phận cấu thành của chủ nghĩa Mác – Lênin.",
                                "Kỹ năng: Biết luận chứng, phân tích các vấn đề chính trị - xã hội.",
                                "Tư tưởng: Xây dựng niềm tin vào mục tiêu, lý tưởng xã hội chủ nghĩa và công cuộc đổi mới do Đảng lãnh đạo.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Đạt được Mục tiêu Học tập CNXHKH_1762978080436.jpg",
                            caption:
                                "Lộ trình học tập Chủ nghĩa Xã hội Khoa học - từ nền tảng kiến thức đến phát triển kỹ năng, hiểu quy luật và trang bị tư duy",
                        },
                        {
                            type: "paragraph",
                            text: "Sự ra đời của Chủ nghĩa Xã hội Khoa học bắt nguồn từ hoàn cảnh lịch sử cụ thể của thế kỷ XIX, bao gồm các điều kiện kinh tế-xã hội và các tiền đề khoa học-tư tưởng.",
                        },
                        {
                            type: "paragraph",
                            text: "Về điều kiện kinh tế – xã hội:",
                        },
                        {
                            type: "list",
                            items: [
                                "Trong thế kỷ XIX, cuộc cách mạng công nghiệp phát triển mạnh mẽ đã hình thành hai giai cấp cơ bản đối lập nhau là giai cấp tư sản và giai cấp công nhân.",
                                "Mâu thuẫn sâu sắc giữa lao động (giai cấp công nhân) và tư bản (giai cấp tư sản) ngày càng trở nên gay gắt, dẫn đến các phong trào đấu tranh của công nhân nổ ra, đòi hỏi phải có một lý luận cách mạng tiên phong dẫn đường.",
                            ],
                        },
                    ],
                },
                {
                    id: "1-2",
                    chapterTitle:
                        "Chương 1: Nhập môn Chủ nghĩa Xã hội Khoa học",
                    title: "1.2. Các tiền đề cho sự ra đời",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "diagram",
                            url: "/images/Sự hội tụ của các yếu tố_1762978080436.jpg",
                            caption:
                                "Sự hội tụ của ba yếu tố quan trọng dẫn đến sự ra đời của Chủ nghĩa Xã hội Khoa học",
                        },
                        {
                            type: "paragraph",
                            text: "Về tiền đề khoa học tự nhiên, ba phát minh lớn trong vật lý và sinh học đã tạo ra nền tảng vững chắc cho sự phát triển của tư duy biện chứng và chủ nghĩa duy vật.",
                        },
                        {
                            type: "list",
                            items: [
                                "Học thuyết tiến hóa của Darwin.",
                                "Định luật bảo toàn và chuyển hóa năng lượng.",
                                "Học thuyết tế bào.",
                            ],
                        },
                        {
                            type: "image",
                            url: "/images/Thuyết tiến hóa_1761939248432.jpg",
                            caption:
                                "Học thuyết tiến hóa của Darwin - một trong ba phát minh khoa học tự nhiên làm tiền đề cho tư duy biện chứng.",
                        },
                        {
                            type: "image",
                            url: "/images/Định luật bảo toàn năng lượng_1761939248433.png",
                            caption:
                                "Định luật bảo toàn và chuyển hóa năng lượng - nền tảng cho việc hiểu biết về sự chuyển động và biến đổi trong tự nhiên.",
                        },
                        {
                            type: "image",
                            url: "/images/Thuyết tế bào_1761939248433.png",
                            caption:
                                "Học thuyết tế bào - phát hiện quan trọng về cấu trúc cơ bản của sự sống.",
                        },
                        {
                            type: "paragraph",
                            text: "Về tiền đề tư tưởng – lý luận, CNXHKH đã kế thừa những giá trị tinh hoa của tư tưởng nhân loại trước đó:",
                        },
                        {
                            type: "list",
                            items: [
                                "Triết học cổ điển Đức (với các đại biểu như Hegel, Feuerbach).",
                                "Kinh tế chính trị học cổ điển Anh (với các đại biểu như Smith, Ricardo).",
                                "Chủ nghĩa xã hội không tưởng Pháp (với các đại biểu như Saint-Simon, Fourier, Owen).",
                            ],
                        },
                        {
                            type: "paragraph",
                            text: "Chủ nghĩa xã hội không tưởng có giá trị nhân đạo sâu sắc nhưng còn nhiều hạn chế như thiếu cơ sở khoa học, và đặc biệt là không chỉ ra được lực lượng xã hội tiên phong có thể thực hiện cuộc chuyển biến cách mạng - đó chính là giai cấp công nhân.",
                        },
                    ],
                },
                {
                    id: "1-3",
                    chapterTitle:
                        "Chương 1: Nhập môn Chủ nghĩa Xã hội Khoa học",
                    title: "1.3. Vai trò của C. Mác và Ph. Ăngghen",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "image",
                            url: "/images/Các Mác - Ăngghen_1761939248433.jpg",
                            caption:
                                "Karl Marx và Friedrich Engels - hai nhà sáng lập Chủ nghĩa Xã hội Khoa học.",
                        },
                        {
                            type: "paragraph",
                            text: "C. Mác và Ph. Ăngghen đã có vai trò quyết định trong việc chuyển chủ nghĩa xã hội từ không tưởng thành khoa học. Quá trình này được thể hiện qua sự chuyển biến lập trường và các phát kiến vĩ đại của hai ông.",
                        },
                        {
                            type: "paragraph",
                            text: "Cả hai ông đều xuất phát từ giới tri thức, ban đầu đi theo triết học Hegel và lập trường dân chủ cách mạng, nhưng qua quá trình nghiên cứu và tham gia thực tiễn, hai ông đã dần chuyển từ chủ nghĩa duy tâm sang chủ nghĩa duy vật, từ lập trường dân chủ cách mạng sang chủ nghĩa cộng sản.",
                        },
                        {
                            type: "paragraph",
                            text: "Ba phát kiến vĩ đại của C. Mác và Ph. Ăngghen đã tạo nên nền tảng cho CNXHKH:",
                        },
                        {
                            type: "list",
                            items: [
                                "Chủ nghĩa duy vật lịch sử: Khẳng định quy luật phát triển tất yếu của lịch sử xã hội loài người, mà đỉnh cao là sự ra đời của hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
                                "Học thuyết giá trị thặng dư: Vạch trần bản chất bóc lột của chủ nghĩa tư bản, chỉ ra nguồn gốc của sự giàu có của giai cấp tư sản và sự bần cùng của giai cấp công nhân.",
                                "Sứ mệnh lịch sử của giai cấp công nhân: Phát hiện ra giai cấp công nhân chính là lực lượng xã hội có khả năng lãnh đạo cuộc đấu tranh xóa bỏ chủ nghĩa tư bản và xây dựng xã hội mới.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Ba phát kiến vĩ đại của Mác và Ăngghen_1762978080436.jpg",
                            caption:
                                "Sơ đồ tổng hợp ba phát kiến vĩ đại của Mác và Ăngghen và những đóng góp của họ cho CNXHKH",
                        },
                    ],
                },
                {
                    id: "1-4",
                    chapterTitle:
                        "Chương 1: Nhập môn Chủ nghĩa Xã hội Khoa học",
                    title: "1.4. Tác phẩm và các giai đoạn phát triển",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: 'Tác phẩm "Tuyên ngôn của Đảng Cộng sản" (1848) được xem là văn kiện có tính cương lĩnh đầu tiên, đánh dấu sự ra đời chính thức của Chủ nghĩa Xã hội Khoa học.',
                        },
                        {
                            type: "image",
                            url: "/images/Tuyên ngôn đảng cộng sản 1848_1761939248432.png",
                            caption:
                                'Bìa ấn bản đầu tiên của "Tuyên ngôn của Đảng Cộng sản" năm 1848 - tác phẩm đánh dấu sự ra đời chính thức của CNXHKH.',
                        },
                        {
                            type: "diagram",
                            url: "/images/Tuyên ngôn của Đảng Cộng sản_1762978080437.jpg",
                            caption:
                                "Ý nghĩa và vai trò của Tuyên ngôn Đảng Cộng sản trong lịch sử phong trào công nhân và cách mạng xã hội chủ nghĩa",
                        },
                        {
                            type: "paragraph",
                            text: "Các giai đoạn phát triển chính của CNXHKH bao gồm:",
                        },
                        {
                            type: "list",
                            items: [
                                "Thời kỳ Mác – Ăngghen (1848–1895): Hình thành và phát triển các lý luận cơ bản về cách mạng vô sản, chuyên chính vô sản và liên minh công nông, được tổng kết từ thực tiễn, đặc biệt là Công xã Paris (1871).",
                                "Thời kỳ Lênin (cuối XIX – đầu XX): V.I. Lênin bảo vệ, vận dụng và phát triển sáng tạo CNXHKH trong bối cảnh chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa. Lý luận đã được hiện thực hóa qua thắng lợi của Cách mạng Tháng Mười Nga (1917).",
                                "Sau Lênin: CNXHKH tiếp tục được các Đảng Cộng sản và công nhân vận dụng vào điều kiện cụ thể của mỗi nước, hình thành hệ thống xã hội chủ nghĩa thế giới. Sau sự sụp đổ của Liên Xô, các nước XHCN còn lại, trong đó có Việt Nam, đã tiến hành cải cách, đổi mới để tiếp tục con đường đã chọn.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Các Giai Đoạn Phát Triển của CNXHKH_1762978080436.jpg",
                            caption:
                                "Dòng thời gian các giai đoạn phát triển quan trọng của Chủ nghĩa Xã hội Khoa học từ 1848 đến nay",
                        },
                        {
                            type: "paragraph",
                            text: "Việc học tập CNXHKH có ý nghĩa quan trọng trong việc xây dựng thế giới quan khoa học, củng cố niềm tin vào con đường cách mạng và trang bị phương pháp tư duy biện chứng cho sinh viên.",
                        },
                        {
                            type: "diagram",
                            url: "/images/Chủ nghĩa xã hội khoa học Nhập môn và phát triển_1762978080437.jpg",
                            caption:
                                "Sơ đồ tổng quan về Chủ nghĩa Xã hội Khoa học: mục tiêu học tập, vai trò của Mác-Ăngghen, các giai đoạn phát triển và ý nghĩa",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/Iqvx2Jv4zjI",
                            caption:
                                "Video: Tổng quan về Chủ nghĩa Xã hội Khoa học - ý nghĩa và vai trò trong thời đại ngày nay.",
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Theo nghĩa rộng, Chủ nghĩa xã hội khoa học được hiểu là gì?",
                    options: [
                        "Một học thuyết kinh tế học thuần túy của C.Mác",
                        "Toàn bộ chủ nghĩa Mác - Lênin, luận giải sự chuyển biến tất yếu từ CNTB lên CNXH và CNCS",
                        "Một phần trong triết học cổ điển Đức",
                        "Một phong trào chính trị của giai cấp công nhân",
                    ],
                    correctAnswer:
                        "Toàn bộ chủ nghĩa Mác - Lênin, luận giải sự chuyển biến tất yếu từ CNTB lên CNXH và CNCS",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo nghĩa hẹp, Chủ nghĩa xã hội khoa học là gì?",
                    options: [
                        "Một bộ phận trong ba bộ phận cấu thành của chủ nghĩa Mác - Lênin",
                        "Hệ thống chính trị của các nước xã hội chủ nghĩa",
                        "Một nhánh của kinh tế chính trị học",
                        "Lý luận phê phán triết học cổ điển Đức",
                    ],
                    correctAnswer:
                        "Một bộ phận trong ba bộ phận cấu thành của chủ nghĩa Mác - Lênin",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hoàn cảnh kinh tế - xã hội dẫn đến sự ra đời của CNXH khoa học gắn với sự phát triển mạnh mẽ của yếu tố nào?",
                    options: [
                        "Cách mạng tư sản",
                        "Cách mạng công nghiệp",
                        "Cách mạng nông nghiệp",
                        "Cách mạng văn hóa",
                    ],
                    correctAnswer: "Cách mạng công nghiệp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hai giai cấp cơ bản, đối lập nhưng nương tựa vào nhau trong xã hội tư bản là:",
                    options: [
                        "Nông dân và địa chủ",
                        "Tư sản và công nhân",
                        "Tư sản và quý tộc",
                        "Tư sản và nông dân",
                    ],
                    correctAnswer: "Tư sản và công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Phong trào công nhân nào được xem là có tính chính trị rõ nét, với khẩu hiệu “Cộng hòa hay là chết”?",
                    options: [
                        "Phong trào Hiến chương ở Anh",
                        "Phong trào công nhân dệt ở Xi-lê-di (Đức)",
                        "Phong trào công nhân dệt ở Li-on (Pháp)",
                        "Phong trào công nhân ở Mỹ",
                    ],
                    correctAnswer: "Phong trào công nhân dệt ở Li-on (Pháp)",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ba phát minh khoa học tự nhiên tạo tiền đề cho CNXH khoa học gồm:",
                    options: [
                        "Thuyết tiến hóa, học thuyết tế bào, định luật bảo toàn và chuyển hóa năng lượng",
                        "Thuyết lượng tử, thuyết tương đối, cơ học cổ điển",
                        "Thuyết tế bào, thuyết tương đối, định luật vạn vật hấp dẫn",
                        "Hóa học nguyên tử, thuyết tiến hóa, quang học lượng tử",
                    ],
                    correctAnswer:
                        "Thuyết tiến hóa, học thuyết tế bào, định luật bảo toàn và chuyển hóa năng lượng",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ai là người khẳng định CNXH khoa học là “người thừa kế chính đáng của triết học Đức, kinh tế chính trị học Anh và CNXH Pháp”?",
                    options: ["C.Mác", "Ph.Ăngghen", "V.I.Lênin", "R.O-en"],
                    correctAnswer: "V.I.Lênin",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Phát kiến vĩ đại thứ hai của C.Mác và Ph.Ăngghen là gì?",
                    options: [
                        "Chủ nghĩa duy vật biện chứng",
                        "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân",
                        "Học thuyết về giá trị thặng dư",
                        "Học thuyết tiến hóa",
                    ],
                    correctAnswer: "Học thuyết về giá trị thặng dư",
                },
                {
                    type: "multiple-choice",
                    question:
                        "“Tuyên ngôn của Đảng Cộng sản” ra đời vào năm nào?",
                    options: ["1845", "1846", "1848", "1850"],
                    correctAnswer: "1848",
                },
                {
                    type: "multiple-choice",
                    question:
                        "“Tuyên ngôn của Đảng Cộng sản” có ý nghĩa như thế nào đối với phong trào công nhân quốc tế?",
                    options: [
                        "Là tài liệu triết học đơn thuần",
                        "Là cương lĩnh chính trị và kim chỉ nam hành động của phong trào công nhân quốc tế",
                        "Là bản tuyên ngôn của Cách mạng Pháp",
                        "Là tác phẩm phê phán tôn giáo",
                    ],
                    correctAnswer:
                        "Là cương lĩnh chính trị và kim chỉ nam hành động của phong trào công nhân quốc tế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Bộ “Tư bản” của C.Mác được xuất bản vào năm nào?",
                    options: ["1848", "1852", "1864", "1867"],
                    correctAnswer: "1867",
                },
                {
                    type: "multiple-choice",
                    question:
                        "V.I.Lênin khẳng định rằng từ khi bộ “Tư bản” ra đời, quan niệm duy vật lịch sử trở thành:",
                    options: [
                        "Một giả thuyết mới",
                        "Một nguyên lý khoa học đã được chứng minh",
                        "Một lý luận chính trị",
                        "Một triết học không tưởng",
                    ],
                    correctAnswer: "Một nguyên lý khoa học đã được chứng minh",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo C.Mác và Ph.Ăngghen, điều kiện tiên quyết bảo đảm cho cuộc cách mạng vô sản phát triển không ngừng là:",
                    options: [
                        "Liên minh giữa công nhân và tư sản",
                        "Liên minh giữa công nhân và nông dân",
                        "Liên minh giữa nông dân và trí thức",
                        "Liên minh giữa giai cấp công nhân và tiểu tư sản",
                    ],
                    correctAnswer: "Liên minh giữa công nhân và nông dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Tác phẩm nào của Ph.Ăngghen đã luận chứng sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học?",
                    options: [
                        "Gia đình, chế độ tư hữu và nhà nước",
                        "Chống Đuyrinh",
                        "Tuyên ngôn của Đảng Cộng sản",
                        "Biện chứng của tự nhiên",
                    ],
                    correctAnswer: "Chống Đuyrinh",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Công lao to lớn của V.I.Lênin đối với chủ nghĩa xã hội khoa học là:",
                    options: [
                        "Phát triển chủ nghĩa xã hội từ không tưởng thành khoa học",
                        "Biến chủ nghĩa xã hội từ lý luận thành hiện thực",
                        "Đưa chủ nghĩa xã hội vào phong trào dân tộc",
                        "Hoàn chỉnh học thuyết về duy vật biện chứng",
                    ],
                    correctAnswer:
                        "Biến chủ nghĩa xã hội từ lý luận thành hiện thực",
                },
                {
                    type: "multiple-choice",
                    question:
                        "V.I.Lênin xây dựng lý luận về đảng cách mạng kiểu mới của giai cấp công nhân dựa trên cơ sở:",
                    options: [
                        "Phân tích xã hội tư bản",
                        "Kế thừa di sản lý luận của C.Mác và Ph.Ăngghen",
                        "Tư tưởng cách mạng Pháp",
                        "Chủ nghĩa dân túy Nga",
                    ],
                    correctAnswer:
                        "Kế thừa di sản lý luận của C.Mác và Ph.Ăngghen",
                },
                {
                    type: "multiple-choice",
                    question: "Theo V.I.Lênin, chuyên chính vô sản là:",
                    options: [
                        "Một nhà nước quan liêu kiểu mới",
                        "Một hình thức nhà nước mới – dân chủ đối với vô sản",
                        "Một mô hình dân chủ tư sản",
                        "Một công cụ tạm thời để cai trị giai cấp tư sản",
                    ],
                    correctAnswer:
                        "Một hình thức nhà nước mới – dân chủ đối với vô sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong cương lĩnh dân tộc của V.I.Lênin, ba nguyên tắc cơ bản gồm có:",
                    options: [
                        "Độc lập, tự do, hạnh phúc",
                        "Bình đẳng dân tộc, quyền tự quyết, đoàn kết giai cấp vô sản",
                        "Hòa bình, trung lập, hợp tác",
                        "Độc lập chính trị, tự chủ kinh tế, thống nhất văn hóa",
                    ],
                    correctAnswer:
                        "Bình đẳng dân tộc, quyền tự quyết, đoàn kết giai cấp vô sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "“Chủ nghĩa Mác - Lênin” được hình thành gắn liền với thời kỳ lãnh đạo của ai?",
                    options: [
                        "V.I.Lênin",
                        "Xtalin",
                        "Ph.Ăngghen",
                        "Mao Trạch Đông",
                    ],
                    correctAnswer: "Xtalin",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hội nghị Matxcơva năm 1960 của 81 Đảng Cộng sản và công nhân quốc tế đã xác định nhiệm vụ hàng đầu là:",
                    options: [
                        "Thực hiện công nghiệp hóa xã hội chủ nghĩa",
                        "Củng cố hòa bình, ngăn chặn chiến tranh thế giới mới",
                        "Đấu tranh xóa bỏ tôn giáo",
                        "Hợp nhất các đảng cộng sản thành một tổ chức",
                    ],
                    correctAnswer:
                        "Củng cố hòa bình, ngăn chặn chiến tranh thế giới mới",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học là gì?",
                    options: [
                        "Các quy luật tự nhiên chi phối sự phát triển xã hội",
                        "Những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                        "Sự vận động của nền kinh tế thị trường tư bản chủ nghĩa",
                        "Tư tưởng của các nhà triết học thời cổ đại",
                    ],
                    correctAnswer:
                        "Những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Chủ nghĩa xã hội khoa học thuộc bộ phận nào của chủ nghĩa Mác - Lênin?",
                    options: [
                        "Kinh tế chính trị học",
                        "Triết học Mác - Lênin",
                        "Một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin",
                        "Lịch sử triết học phương Tây",
                    ],
                    correctAnswer:
                        "Một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Phương pháp luận chung nhất mà Chủ nghĩa xã hội khoa học sử dụng là gì?",
                    options: [
                        "Phương pháp duy tâm chủ quan",
                        "Phương pháp duy vật biện chứng và duy vật lịch sử",
                        "Phương pháp mô tả và liệt kê",
                        "Phương pháp thực nghiệm tự nhiên",
                    ],
                    correctAnswer:
                        "Phương pháp duy vật biện chứng và duy vật lịch sử",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Phương pháp kết hợp lôgíc và lịch sử trong nghiên cứu Chủ nghĩa xã hội khoa học nhằm mục đích gì?",
                    options: [
                        "Chỉ liệt kê các sự kiện lịch sử",
                        "Rút ra kết luận khoa học về lôgíc của quá trình lịch sử",
                        "Tập trung phân tích kinh tế vi mô",
                        "So sánh giữa các nền văn minh cổ đại",
                    ],
                    correctAnswer:
                        "Rút ra kết luận khoa học về lôgíc của quá trình lịch sử",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Ph.Ăngghen, nhiệm vụ của Chủ nghĩa xã hội khoa học là gì?",
                    options: [
                        "Giải thích sự hình thành của các tôn giáo",
                        "Nghiên cứu những điều kiện và bản chất của sự nghiệp giải phóng giai cấp công nhân",
                        "Dự báo xu hướng phát triển của nền công nghiệp",
                        "Khẳng định vai trò của triết học cổ điển Đức",
                    ],
                    correctAnswer:
                        "Nghiên cứu những điều kiện và bản chất của sự nghiệp giải phóng giai cấp công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ý nghĩa lý luận của việc nghiên cứu Chủ nghĩa xã hội khoa học là:",
                    options: [
                        "Trang bị nhận thức chính trị - xã hội và phương pháp luận khoa học cho giai cấp công nhân",
                        "Phục vụ nghiên cứu văn hóa và tôn giáo cổ đại",
                        "Làm cơ sở cho việc phát triển công nghệ hiện đại",
                        "Tăng cường năng lực quản lý tài chính nhà nước",
                    ],
                    correctAnswer:
                        "Trang bị nhận thức chính trị - xã hội và phương pháp luận khoa học cho giai cấp công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Chủ nghĩa xã hội khoa học giúp giai cấp công nhân:",
                    options: [
                        "Có tri thức kỹ thuật cao",
                        "Hiểu rõ sứ mệnh lịch sử của mình và con đường đấu tranh cách mạng",
                        "Phát triển tư duy kinh doanh",
                        "Mở rộng hợp tác thương mại quốc tế",
                    ],
                    correctAnswer:
                        "Hiểu rõ sứ mệnh lịch sử của mình và con đường đấu tranh cách mạng",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo nội dung bài học, một nhiệm vụ quan trọng của Chủ nghĩa xã hội khoa học là:",
                    options: [
                        "Đấu tranh bác bỏ các trào lưu tư tưởng chống cộng, chống chủ nghĩa xã hội",
                        "Cải tiến phương thức sản xuất tư bản chủ nghĩa",
                        "Thúc đẩy tự do thương mại quốc tế",
                        "Phát triển học thuyết về nhà nước tư sản",
                    ],
                    correctAnswer:
                        "Đấu tranh bác bỏ các trào lưu tư tưởng chống cộng, chống chủ nghĩa xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong các phương pháp nghiên cứu sau, phương pháp nào KHÔNG thuộc Chủ nghĩa xã hội khoa học?",
                    options: [
                        "Phương pháp kết hợp lôgíc và lịch sử",
                        "Phương pháp khảo sát và phân tích chính trị - xã hội",
                        "Phương pháp mô hình hoá và thống kê",
                        "Phương pháp thần học và tín ngưỡng học",
                    ],
                    correctAnswer: "Phương pháp thần học và tín ngưỡng học",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ý nghĩa thực tiễn của việc nghiên cứu Chủ nghĩa xã hội khoa học là gì?",
                    options: [
                        "Giúp củng cố niềm tin vào chủ nghĩa xã hội, kiên định con đường phát triển mà Đảng và Chủ tịch Hồ Chí Minh đã lựa chọn",
                        "Tăng năng suất lao động trong công nghiệp",
                        "Nâng cao năng lực tài chính của doanh nghiệp",
                        "Giảm thiểu xung đột giữa các giai cấp trong xã hội tư bản",
                    ],
                    correctAnswer:
                        "Giúp củng cố niềm tin vào chủ nghĩa xã hội, kiên định con đường phát triển mà Đảng và Chủ tịch Hồ Chí Minh đã lựa chọn",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Karl Marx & F. Engels",
                            definition:
                                "Những người sáng lập Chủ nghĩa Xã hội Khoa học.",
                        },
                        {
                            term: "Tuyên ngôn của Đảng Cộng sản",
                            definition:
                                "Tác phẩm đánh dấu sự ra đời của CNXHKH.",
                        },
                        {
                            term: "Học thuyết giá trị thặng dư",
                            definition:
                                "Phát kiến vĩ đại của Mác, vạch trần bản chất bóc lột của CNTB.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các tiền đề khoa học với nội dung tương ứng.",
                    pairs: [
                        {
                            term: "Học thuyết tiến hóa của Darwin",
                            definition:
                                "Chứng minh sự phát triển của sinh vật từ thấp đến cao.",
                        },
                        {
                            term: "Định luật bảo toàn và chuyển hóa năng lượng",
                            definition:
                                "Khẳng định năng lượng không tự sinh ra, không tự mất đi.",
                        },
                        {
                            term: "Học thuyết tế bào",
                            definition:
                                "Phát hiện ra đơn vị cấu trúc cơ bản của sự sống.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các tiền đề tư tưởng với đại biểu tiêu biểu.",
                    pairs: [
                        {
                            term: "Triết học cổ điển Đức",
                            definition:
                                "Hegel, Feuerbach - nền tảng phương pháp biện chứng.",
                        },
                        {
                            term: "Kinh tế chính trị học cổ điển Anh",
                            definition:
                                "Adam Smith, David Ricardo - học thuyết về giá trị lao động.",
                        },
                        {
                            term: "Chủ nghĩa xã hội không tưởng Pháp",
                            definition:
                                "Saint-Simon, Fourier, Owen - phê phán CNTB.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối ba phát kiến vĩ đại với nội dung của chúng.",
                    pairs: [
                        {
                            term: "Chủ nghĩa duy vật lịch sử",
                            definition:
                                "Quy luật phát triển tất yếu của xã hội loài người.",
                        },
                        {
                            term: "Học thuyết giá trị thặng dư",
                            definition:
                                "Vạch trần nguồn gốc của sự bóc lột trong CNTB.",
                        },
                        {
                            term: "Sứ mệnh lịch sử của giai cấp công nhân",
                            definition:
                                "Lực lượng xã hội thực hiện cách mạng XHCN.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các giai đoạn phát triển với đặc điểm chính.",
                    pairs: [
                        {
                            term: "Thời kỳ Mác - Ăngghen (1848-1895)",
                            definition:
                                "Hình thành các lý luận cơ bản về cách mạng vô sản.",
                        },
                        {
                            term: "Thời kỳ Lênin (cuối XIX - đầu XX)",
                            definition:
                                "Phát triển CNXHKH trong thời đại đế quốc chủ nghĩa.",
                        },
                        {
                            term: "Sau Lênin",
                            definition:
                                "Vận dụng CNXHKH vào điều kiện cụ thể từng nước.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các phong trào công nhân với đặc điểm của chúng.",
                    pairs: [
                        {
                            term: "Phong trào Hiến chương (Anh)",
                            definition:
                                "Đấu tranh để có quyền bầu cử phổ thông.",
                        },
                        {
                            term: "Phong trào công nhân Li-on (Pháp)",
                            definition: "Khẩu hiệu 'Cộng hòa hay là chết'.",
                        },
                        {
                            term: "Phong trào công nhân Xi-lê-di (Đức)",
                            definition:
                                "Cuộc khởi nghĩa của công nhân dệt năm 1844.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-2",
            title: "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
            sections: [
                {
                    id: "2-1",
                    chapterTitle:
                        "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
                    title: "2.1. Khái niệm và đặc điểm của giai cấp công nhân",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và phát triển cùng với quá trình phát triển của nền công nghiệp hiện đại.",
                        },
                        {
                            type: "image",
                            url: "/images/Giai cấp công nhân_1761940194464.jpg",
                            caption:
                                "Giai cấp công nhân - lực lượng tiên phong của cách mạng xã hội chủ nghĩa.",
                        },
                        {
                            type: "paragraph",
                            text: "Về khái niệm, giai cấp công nhân (hay giai cấp vô sản) được định nghĩa là lực lượng lao động trực tiếp hoặc gián tiếp vận hành các tư liệu sản xuất hiện đại. Họ là sản phẩm của nền đại công nghiệp, ra đời và phát triển song hành với chủ nghĩa tư bản.",
                        },
                        {
                            type: "paragraph",
                            text: "Giai cấp công nhân có những đặc điểm cơ bản sau:",
                        },
                        {
                            type: "diagram",
                            url: "/images/Đặc điểm cơ bản của giai cấp công nhân_1763062189133.png",
                            caption:
                                "Ba trụ cột đặc điểm cơ bản của giai cấp công nhân: Kinh tế - Xã hội, Chính trị - Xã hội, Văn hóa - Tư tưởng",
                        },
                        {
                            type: "list",
                            items: [
                                "Về kinh tế: Họ không sở hữu tư liệu sản xuất, do đó phải bán sức lao động để sống và bị giai cấp tư sản bóc lột giá trị thặng dư. Đồng thời, họ là lực lượng đại diện cho phương thức sản xuất tiên tiến, có tính xã hội hóa cao.",
                                "Về chính trị – xã hội: Họ có tinh thần cách mạng triệt để, tính tổ chức, kỷ luật cao, và mang tinh thần quốc tế vì có chung mục tiêu và kẻ thù là giai cấp tư sản trên toàn thế giới.",
                                "Về văn hóa – tư tưởng: Giai cấp công nhân là lực lượng tiên phong trong việc xây dựng một hệ ý thức xã hội mới – tư tưởng xã hội chủ nghĩa và cộng sản chủ nghĩa.",
                            ],
                        },
                    ],
                },
                {
                    id: "2-2",
                    chapterTitle:
                        "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
                    title: "2.2. Sứ mệnh lịch sử và nội dung thực hiện",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Sứ mệnh lịch sử toàn thế giới của giai cấp công nhân là xóa bỏ chế độ tư bản chủ nghĩa, xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa. Qua đó, họ giải phóng chính bản thân mình và toàn thể nhân loại khỏi mọi áp bức, bóc lột, bất công.",
                        },
                        {
                            type: "image",
                            url: "/images/Chủ nghĩa tư bản_1761940194465.jpg",
                            caption:
                                "Chủ nghĩa tư bản và sự bóc lột giai cấp công nhân.",
                        },
                        {
                            type: "paragraph",
                            text: "Sứ mệnh này được thực hiện toàn diện trên các mặt:",
                        },
                        {
                            type: "diagram",
                            url: "/images/Các mặt thực hiện sứ mệnh của giai cấp công nhân_1763062189133.png",
                            caption:
                                "Ba mặt thực hiện sứ mệnh lịch sử: Kinh tế, Chính trị - Xã hội, Tư tưởng - Văn hóa",
                        },
                        {
                            type: "list",
                            items: [
                                "Kinh tế: Thủ tiêu chế độ chiếm hữu tư nhân về tư liệu sản xuất, thiết lập chế độ công hữu và tổ chức một nền sản xuất xã hội mới dựa trên khoa học, công nghệ tiên tiến.",
                                "Chính trị – xã hội: Lãnh đạo cuộc cách mạng vô sản, giành chính quyền và thành lập nhà nước XHCN, thực hiện dân chủ cho tuyệt đại đa số nhân dân lao động.",
                                "Tư tưởng – văn hóa: Xây dựng hệ tư tưởng xã hội chủ nghĩa, đấu tranh chống lại các tư tưởng phản động, lạc hậu và từng bước hình thành con người mới xã hội chủ nghĩa.",
                            ],
                        },
                    ],
                },
                {
                    id: "2-3",
                    chapterTitle:
                        "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
                    title: "2.3. Điều kiện quy định sứ mệnh lịch sử",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Sứ mệnh lịch sử của giai cấp công nhân không phải là ý muốn chủ quan mà được quy định bởi những điều kiện khách quan và chủ quan.",
                        },
                        {
                            type: "image",
                            url: "/images/Cách mạng vô sản_1761940194465.jpg",
                            caption:
                                "Cách mạng vô sản - con đường giải phóng giai cấp và toàn thể nhân loại.",
                        },
                        { type: "paragraph", text: "Về điều kiện khách quan:" },
                        {
                            type: "diagram",
                            url: "/images/Những điều kiện khách quan quy định sứ mệnh lịch sử_1763062189132.png",
                            caption:
                                "Ba điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân",
                        },
                        {
                            type: "list",
                            items: [
                                "Do địa vị kinh tế – xã hội: Là sản phẩm của nền đại công nghiệp, họ đại diện cho lực lượng sản xuất tiên tiến nhất và có mâu thuẫn lợi ích cơ bản, không thể điều hòa với giai cấp tư sản.",
                                "Do đặc điểm chính trị - xã hội: Có tính tổ chức, kỷ luật, tinh thần hợp tác và đoàn kết quốc tế cao, tạo điều kiện để trở thành giai cấp có khả năng lãnh đạo cách mạng.",
                                "Được soi đường bằng lý luận cách mạng: Chủ nghĩa Mác – Lênin là vũ khí lý luận sắc bén, giúp phong trào công nhân chuyển từ đấu tranh tự phát sang tự giác.",
                            ],
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/dLsBPvi6RII",
                            caption:
                                "Vai trò lịch sử của giai cấp công nhân Việt Nam | VTV4",
                        },
                        { type: "paragraph", text: "Về điều kiện chủ quan:" },
                        {
                            type: "diagram",
                            url: "/images/Những điều kiện chủ quan để giai cấp công nhân thực hiện sứ mệnh_1763062189131.png",
                            caption:
                                "Ba yếu tố chủ quan: Phát triển giai cấp công nhân, Giác ngộ chính trị, Lãnh đạo của Đảng Cộng sản",
                        },
                        {
                            type: "list",
                            items: [
                                "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng, đặc biệt là sự trưởng thành về ý thức chính trị.",
                                "Vai trò lãnh đạo của Đảng Cộng sản – đội tiên phong của giai cấp công nhân, là nhân tố quyết định nhất đảm bảo cho giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình.",
                            ],
                        },
                    ],
                },
                {
                    id: "2-4",
                    chapterTitle:
                        "Chương 2: Sứ mệnh lịch sử của giai cấp công nhân",
                    title: "2.4. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Giai cấp công nhân Việt Nam ra đời sớm (đầu thế kỷ XX) trong cuộc khai thác thuộc địa của Pháp, mang những đặc điểm riêng và vai trò lịch sử to lớn.",
                        },
                        {
                            type: "diagram",
                            url: "/images/Giai cấp công nhân Việt Nam hiện đại_1763062189132.png",
                            caption:
                                "Con đường phát triển của giai cấp công nhân Việt Nam: từ truyền thống đến hiện đại",
                        },
                        {
                            type: "list",
                            items: [
                                "Đặc điểm: Có nguồn gốc chủ yếu từ nông dân, ra đời trong một xã hội thuộc địa nửa phong kiến, do đó có tinh thần yêu nước và tinh thần dân tộc sâu sắc. Họ sớm tiếp thu chủ nghĩa Mác – Lênin và nhanh chóng giác ngộ chính trị.",
                                "Vai trò lịch sử: Là lực lượng lãnh đạo cách mạng Việt Nam, thông qua đội tiên phong là Đảng Cộng sản Việt Nam, đã lãnh đạo nhân dân giành độc lập dân tộc (1945) và thống nhất đất nước (1975). Hiện nay, họ là lực lượng nòng cốt trong công cuộc công nghiệp hóa, hiện đại hóa đất nước.",
                                "Yêu cầu hiện nay: Cần không ngừng nâng cao trình độ về mọi mặt (chính trị, văn hóa, khoa học-kỹ thuật) để xây dựng một giai cấp công nhân hiện đại, có tri thức và bản lĩnh, đủ sức dẫn dắt sự nghiệp đổi mới và hội nhập quốc tế.",
                            ],
                        },
                        {
                            type: "image",
                            url: "/images/Giai cấp công nhân VN ngày nay_1761940194464.jpg",
                            caption:
                                "Giai cấp công nhân Việt Nam ngày nay - lực lượng nòng cốt trong công cuộc công nghiệp hóa, hiện đại hóa đất nước.",
                        },
                        {
                            type: "paragraph",
                            text: "Việc nhận thức và thực hiện đúng đắn sứ mệnh lịch sử của giai cấp công nhân là cơ sở để hiểu bản chất, mục tiêu của cách mạng xã hội chủ nghĩa và công cuộc đổi mới ở Việt Nam.",
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Theo C. Mác và Ph. Ăngghen, giai cấp công nhân là con đẻ của:",
                    options: [
                        "Nền nông nghiệp tư bản chủ nghĩa",
                        "Nền đại công nghiệp tư bản chủ nghĩa",
                        "Nền thương nghiệp hiện đại",
                        "Nền kinh tế tiểu thủ công nghiệp",
                    ],
                    correctAnswer: "Nền đại công nghiệp tư bản chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Về phương diện kinh tế - xã hội, giai cấp công nhân là:",
                    options: [
                        "Giai cấp sở hữu tư liệu sản xuất",
                        "Giai cấp của những người bán hàng hóa",
                        "Giai cấp không sở hữu tư liệu sản xuất, phải bán sức lao động để sống",
                        "Giai cấp trung gian giữa nông dân và tư sản",
                    ],
                    correctAnswer:
                        "Giai cấp không sở hữu tư liệu sản xuất, phải bán sức lao động để sống",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mâu thuẫn cơ bản trong phương thức sản xuất tư bản chủ nghĩa là mâu thuẫn giữa:",
                    options: [
                        "Giai cấp công nhân và giai cấp nông dân",
                        "Lao động sống và lao động quá khứ",
                        "Lực lượng sản xuất xã hội hóa với quan hệ sản xuất tư bản chủ nghĩa",
                        "Nhà nước và nhân dân lao động",
                    ],
                    correctAnswer:
                        "Lực lượng sản xuất xã hội hóa với quan hệ sản xuất tư bản chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo C. Mác và Ph. Ăngghen, giai cấp công nhân trong chế độ tư bản chủ nghĩa là:",
                    options: [
                        "Giai cấp thống trị về chính trị",
                        "Giai cấp vô sản làm thuê hiện đại",
                        "Giai cấp tư sản công nghiệp",
                        "Giai cấp quản lý sản xuất",
                    ],
                    correctAnswer: "Giai cấp vô sản làm thuê hiện đại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc điểm nổi bật của giai cấp công nhân về phương thức lao động là:",
                    options: [
                        "Lao động cá thể, thủ công",
                        "Lao động trí óc là chủ yếu",
                        "Lao động bằng phương thức công nghiệp với công cụ là máy móc",
                        "Lao động tự cung tự cấp",
                    ],
                    correctAnswer:
                        "Lao động bằng phương thức công nghiệp với công cụ là máy móc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong chế độ tư bản chủ nghĩa, giai cấp công nhân trở thành giai cấp đối kháng với giai cấp tư sản vì:",
                    options: [
                        "Họ có trình độ học vấn thấp hơn",
                        "Họ không có quyền chính trị",
                        "Họ bị bóc lột giá trị thặng dư",
                        "Họ chiếm đa số dân cư",
                    ],
                    correctAnswer: "Họ bị bóc lột giá trị thặng dư",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo quan điểm Mác - Lênin, giai cấp công nhân là đại biểu cho:",
                    options: [
                        "Lực lượng sản xuất tiên tiến và phương thức sản xuất hiện đại",
                        "Giai cấp trung lưu trong xã hội",
                        "Phương thức sản xuất tiểu thủ công",
                        "Giai cấp chủ sở hữu mới",
                    ],
                    correctAnswer:
                        "Lực lượng sản xuất tiên tiến và phương thức sản xuất hiện đại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Phẩm chất nổi bật được hình thành trong nền sản xuất công nghiệp giúp giai cấp công nhân có vai trò lãnh đạo cách mạng là:",
                    options: [
                        "Tính độc lập và cá nhân chủ nghĩa",
                        "Tính tổ chức, kỷ luật và tinh thần hợp tác",
                        "Tính bảo thủ và ổn định",
                        "Tính tự phát và cảm tính",
                    ],
                    correctAnswer: "Tính tổ chức, kỷ luật và tinh thần hợp tác",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong các nước xã hội chủ nghĩa, giai cấp công nhân có đặc điểm nào sau đây?",
                    options: [
                        "Không sở hữu tư liệu sản xuất",
                        "Làm thuê cho giai cấp tư sản",
                        "Cùng nhân dân lao động làm chủ tư liệu sản xuất",
                        "Là giai cấp bị bóc lột giá trị thặng dư",
                    ],
                    correctAnswer:
                        "Cùng nhân dân lao động làm chủ tư liệu sản xuất",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nội dung sứ mệnh lịch sử của giai cấp công nhân là:",
                    options: [
                        "Lãnh đạo giai cấp tư sản phát triển công nghiệp hóa",
                        "Xác lập hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                        "Giữ gìn trật tự xã hội tư bản",
                        "Mở rộng thị trường tiêu dùng cho hàng hóa",
                    ],
                    correctAnswer:
                        "Xác lập hình thái kinh tế - xã hội cộng sản chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question: "Giai cấp công nhân hiện nay được hiểu là:",
                    options: [
                        "Những người làm nông nghiệp quy mô lớn",
                        "Tập đoàn người sản xuất và dịch vụ bằng phương thức công nghiệp",
                        "Những nhà quản lý kinh tế tri thức",
                        "Giai cấp trung gian giữa công – nông",
                    ],
                    correctAnswer:
                        "Tập đoàn người sản xuất và dịch vụ bằng phương thức công nghiệp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những điểm tương đồng giữa giai cấp công nhân hiện nay và thế kỷ XIX là:",
                    options: [
                        "Đều không tham gia vào quá trình sản xuất công nghiệp",
                        "Vẫn là lực lượng sản xuất hàng đầu của xã hội hiện đại",
                        "Không còn bị bóc lột giá trị thặng dư",
                        "Không có vai trò trong phát triển kinh tế",
                    ],
                    correctAnswer:
                        "Vẫn là lực lượng sản xuất hàng đầu của xã hội hiện đại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ở các nước tư bản chủ nghĩa, quan hệ sản xuất tư bản vẫn dẫn đến tình trạng:",
                    options: [
                        "Phân phối bình đẳng giữa tư sản và công nhân",
                        "Xóa bỏ hoàn toàn đấu tranh giai cấp",
                        "Bóc lột giá trị thặng dư đối với công nhân",
                        "Hợp tác bình đẳng giữa các giai cấp",
                    ],
                    correctAnswer: "Bóc lột giá trị thặng dư đối với công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Xu hướng nổi bật của giai cấp công nhân trong điều kiện kinh tế tri thức là:",
                    options: [
                        "Cơ giới hóa và tự động hóa",
                        "Trí thức hóa và tri thức hóa",
                        "Phân tán hóa lao động thủ công",
                        "Phi công nghiệp hóa sản xuất",
                    ],
                    correctAnswer: "Trí thức hóa và tri thức hóa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "“Công nhân tri thức”, “công nhân áo trắng” là các khái niệm mới phản ánh:",
                    options: [
                        "Sự suy giảm vai trò của công nhân trong sản xuất",
                        "Xu hướng lao động giản đơn trong nền sản xuất hiện đại",
                        "Sự phát triển của công nhân có trình độ và kỹ năng cao",
                        "Sự quay lại phương thức lao động thủ công",
                    ],
                    correctAnswer:
                        "Sự phát triển của công nhân có trình độ và kỹ năng cao",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong nền sản xuất hiện đại, hao phí lao động chủ yếu của công nhân là:",
                    options: [
                        "Sức lực cơ bắp",
                        "Hao phí về trí lực",
                        "Nguồn vốn vật chất",
                        "Sức lao động thủ công",
                    ],
                    correctAnswer: "Hao phí về trí lực",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quá trình sản xuất trong nền công nghiệp hiện đại mang tính chất:",
                    options: [
                        "Khép kín trong từng quốc gia",
                        "Tự cung tự cấp",
                        "Liên kết toàn cầu qua chuỗi giá trị toàn cầu",
                        "Phụ thuộc hoàn toàn vào nông nghiệp",
                    ],
                    correctAnswer:
                        "Liên kết toàn cầu qua chuỗi giá trị toàn cầu",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ở các nước xã hội chủ nghĩa hiện nay, giai cấp công nhân:",
                    options: [
                        "Vẫn bị giai cấp tư sản bóc lột giá trị thặng dư",
                        "Đã trở thành giai cấp lãnh đạo, Đảng Cộng sản là Đảng cầm quyền",
                        "Không còn giữ vai trò chính trị",
                        "Chỉ tham gia trong lĩnh vực sản xuất thủ công",
                    ],
                    correctAnswer:
                        "Đã trở thành giai cấp lãnh đạo, Đảng Cộng sản là Đảng cầm quyền",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nội dung kinh tế - xã hội của sứ mệnh lịch sử giai cấp công nhân là:",
                    options: [
                        "Thúc đẩy phát triển bền vững, nâng cao năng suất và chất lượng sản xuất",
                        "Xây dựng nền quân sự hiện đại",
                        "Tập trung sở hữu tư liệu sản xuất tư nhân",
                        "Giảm vai trò của khoa học – công nghệ",
                    ],
                    correctAnswer:
                        "Thúc đẩy phát triển bền vững, nâng cao năng suất và chất lượng sản xuất",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Về nội dung văn hóa – tư tưởng, sứ mệnh lịch sử của giai cấp công nhân hiện nay là:",
                    options: [
                        "Đấu tranh ý thức hệ giữa chủ nghĩa xã hội và chủ nghĩa tư bản",
                        "Củng cố quyền lực kinh tế của giai cấp tư sản",
                        "Xây dựng xã hội tư bản nhân văn",
                        "Tập trung vào lợi ích vật chất cá nhân",
                    ],
                    correctAnswer:
                        "Đấu tranh ý thức hệ giữa chủ nghĩa xã hội và chủ nghĩa tư bản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Hội nghị lần thứ sáu Ban Chấp hành Trung ương khóa X, giai cấp công nhân Việt Nam bao gồm những ai?",
                    options: [
                        "Những người nông dân sản xuất nhỏ",
                        "Những người lao động chân tay và trí óc, làm công hưởng lương trong sản xuất, kinh doanh và dịch vụ công nghiệp",
                        "Những nhà tư sản và thương nhân công nghiệp",
                        "Những cán bộ, viên chức nhà nước",
                    ],
                    correctAnswer:
                        "Những người lao động chân tay và trí óc, làm công hưởng lương trong sản xuất, kinh doanh và dịch vụ công nghiệp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Giai cấp công nhân Việt Nam ra đời gắn liền với điều kiện lịch sử nào?",
                    options: [
                        "Sự phát triển của nền kinh tế tri thức",
                        "Chính sách khai thác thuộc địa của thực dân Pháp ở Việt Nam",
                        "Phong trào cải cách ruộng đất",
                        "Cách mạng tháng Tám năm 1945",
                    ],
                    correctAnswer:
                        "Chính sách khai thác thuộc địa của thực dân Pháp ở Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Giai cấp công nhân Việt Nam ra đời trước giai cấp nào?",
                    options: [
                        "Giai cấp nông dân",
                        "Giai cấp tư sản",
                        "Giai cấp tiểu tư sản",
                        "Giai cấp địa chủ",
                    ],
                    correctAnswer: "Giai cấp tư sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc điểm nổi bật thể hiện tính cách mạng triệt để của giai cấp công nhân Việt Nam là gì?",
                    options: [
                        "Có số lượng đông đảo",
                        "Có tinh thần dân tộc, trung thành với chủ nghĩa Mác - Lênin và Đảng Cộng sản",
                        "Có trình độ kỹ thuật cao",
                        "Có nguồn gốc xuất thân từ nông dân",
                    ],
                    correctAnswer:
                        "Có tinh thần dân tộc, trung thành với chủ nghĩa Mác - Lênin và Đảng Cộng sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mối quan hệ giữa giai cấp công nhân Việt Nam với nhân dân được thể hiện ở điểm nào sau đây?",
                    options: [
                        "Gắn bó mật thiết, lợi ích của giai cấp công nhân và dân tộc thống nhất với nhau",
                        "Đấu tranh tách biệt với các tầng lớp khác",
                        "Chỉ tập trung vào lợi ích giai cấp mình",
                        "Chủ yếu dựa vào tầng lớp tư sản dân tộc",
                    ],
                    correctAnswer:
                        "Gắn bó mật thiết, lợi ích của giai cấp công nhân và dân tộc thống nhất với nhau",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc điểm xuất thân của đại bộ phận công nhân Việt Nam là gì?",
                    options: [
                        "Từ tầng lớp tiểu tư sản",
                        "Từ tầng lớp nông dân và lao động khác",
                        "Từ giai cấp tư sản",
                        "Từ tầng lớp thương nhân",
                    ],
                    correctAnswer: "Từ tầng lớp nông dân và lao động khác",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ đổi mới, sứ mệnh lịch sử của giai cấp công nhân Việt Nam là gì?",
                    options: [
                        "Lực lượng trung lập trong quá trình phát triển kinh tế",
                        "Lực lượng lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam",
                        "Lực lượng phụ thuộc vào giai cấp nông dân",
                        "Lực lượng đấu tranh riêng lẻ vì lợi ích kinh tế",
                    ],
                    correctAnswer:
                        "Lực lượng lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lĩnh vực kinh tế, giai cấp công nhân Việt Nam có vai trò gì trong thời kỳ mới?",
                    options: [
                        "Là lực lượng chủ yếu tham gia phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
                        "Là lực lượng thụ động trong quá trình hội nhập",
                        "Là lực lượng phụ trợ cho nông nghiệp",
                        "Là lực lượng trung gian trong xã hội",
                    ],
                    correctAnswer:
                        "Là lực lượng chủ yếu tham gia phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Công nhân tri thức và công nhân trẻ hiện nay có đặc điểm gì nổi bật?",
                    options: [
                        "Là lực lượng nhỏ, ít được đào tạo",
                        "Được đào tạo nghề theo chuẩn, có trình độ khoa học - công nghệ",
                        "Chủ yếu làm việc trong khu vực phi chính thức",
                        "Không tham gia vào công tác sản xuất",
                    ],
                    correctAnswer:
                        "Được đào tạo nghề theo chuẩn, có trình độ khoa học - công nghệ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Yếu tố then chốt để giai cấp công nhân Việt Nam thực hiện thành công sứ mệnh lịch sử của mình là gì?",
                    options: [
                        "Xây dựng và chỉnh đốn Đảng trong sạch, vững mạnh",
                        "Mở rộng quan hệ kinh tế quốc tế",
                        "Tăng cường giáo dục kỹ thuật nghề nghiệp",
                        "Nâng cao thu nhập và đời sống công nhân",
                    ],
                    correctAnswer:
                        "Xây dựng và chỉnh đốn Đảng trong sạch, vững mạnh",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Tư liệu sản xuất",
                            definition:
                                "Đối tượng lao động và tư liệu lao động.",
                        },
                        {
                            term: "Giai cấp công nhân",
                            definition: "Sản phẩm của nền đại công nghiệp.",
                        },
                        {
                            term: "Chủ nghĩa xã hội không tưởng",
                            definition:
                                "Một trong những tiền đề lý luận của CNXHKH.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các đặc điểm của giai cấp công nhân với nội dung tương ứng.",
                    pairs: [
                        {
                            term: "Về kinh tế - xã hội",
                            definition:
                                "Không sở hữu tư liệu sản xuất, phải bán sức lao động để sống.",
                        },
                        {
                            term: "Về chính trị",
                            definition:
                                "Có tính tổ chức, kỷ luật cao và tinh thần quốc tế.",
                        },
                        {
                            term: "Về văn hóa - tư tưởng",
                            definition:
                                "Lực lượng tiên phong xây dựng hệ ý thức xã hội mới.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối sứ mệnh lịch sử với nội dung thực hiện trên từng lĩnh vực.",
                    pairs: [
                        {
                            term: "Lĩnh vực kinh tế",
                            definition:
                                "Thủ tiêu chế độ chiếm hữu tư nhân, thiết lập chế độ công hữu.",
                        },
                        {
                            term: "Lĩnh vực chính trị",
                            definition:
                                "Giành chính quyền, thành lập nhà nước XHCN.",
                        },
                        {
                            term: "Lĩnh vực tư tưởng - văn hóa",
                            definition:
                                "Xây dựng hệ tư tưởng XHCN, hình thành con người mới.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các điều kiện quyết định sứ mệnh với nội dung cụ thể.",
                    pairs: [
                        {
                            term: "Điều kiện kinh tế - xã hội",
                            definition:
                                "Là đại diện cho lực lượng sản xuất tiên tiến nhất.",
                        },
                        {
                            term: "Điều kiện chính trị",
                            definition:
                                "Có tính tổ chức, kỷ luật và tinh thần hợp tác cao.",
                        },
                        {
                            term: "Điều kiện lý luận",
                            definition:
                                "Được soi đường bằng chủ nghĩa Mác - Lênin.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối đặc điểm giai cấp công nhân Việt Nam với nội dung.",
                    pairs: [
                        {
                            term: "Nguồn gốc xuất thân",
                            definition:
                                "Chủ yếu từ nông dân trong xã hội thuộc địa nửa phong kiến.",
                        },
                        {
                            term: "Tinh thần cách mạng",
                            definition:
                                "Có tinh thần yêu nước và dân tộc sâu sắc.",
                        },
                        {
                            term: "Vai trò lịch sử",
                            definition:
                                "Lãnh đạo cách mạng giành độc lập và thống nhất đất nước.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối xu hướng phát triển công nhân hiện đại với đặc điểm.",
                    pairs: [
                        {
                            term: "Công nhân tri thức",
                            definition:
                                "Có trình độ cao, làm việc trong kinh tế tri thức.",
                        },
                        {
                            term: "Công nhân hiện đại",
                            definition:
                                "Lao động chủ yếu bằng trí lực, không phải sức lực.",
                        },
                        {
                            term: "Yêu cầu hiện nay",
                            definition:
                                "Nâng cao trình độ về chính trị, văn hóa, khoa học - kỹ thuật.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-3",
            title: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
            sections: [
                {
                    id: "3-1",
                    chapterTitle: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
                    title: "3.1. Bản chất và đặc trưng của chủ nghĩa xã hội",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Chủ nghĩa xã hội (CNXH) là một học thuyết, một phong trào và một chế độ xã hội, là giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
                        },
                        {
                            type: "paragraph",
                            text: "Về bản chất, CNXH là một hình thái kinh tế – xã hội mới, thay thế chủ nghĩa tư bản, với mục tiêu cao nhất là giải phóng con người khỏi mọi áp bức bóc lột, phát triển toàn diện con người và xây dựng một xã hội công bằng, dân chủ, văn minh.",
                        },
                        {
                            type: "paragraph",
                            text: "CNXH có những đặc trưng cơ bản sau:",
                        },
                        {
                            type: "list",
                            items: [
                                "Về kinh tế: Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu, phát triển lực lượng sản xuất hiện đại với năng suất lao động cao.",
                                "Về chính trị: Xây dựng nhà nước của nhân dân, do nhân dân, vì nhân dân, dưới sự lãnh đạo của Đảng Cộng sản.",
                                "Về xã hội: Không còn giai cấp bóc lột, thực hiện công bằng, bình đẳng xã hội.",
                                "Về văn hóa – con người: Xây dựng hệ giá trị mới với cốt lõi là lao động, công bằng, nhân ái, dân chủ, kỷ luật, và sáng tạo.",
                                "Về đối ngoại: Thực hiện chính sách hợp tác, hòa bình, hữu nghị giữa các dân tộc.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Những đặc trưng cơ bản của Chủ nghĩa Xã hội_1763065084123.png",
                            caption:
                                "5 đặc trưng cơ bản của Chủ nghĩa Xã hội: Kinh tế, Chính trị, Xã hội, Văn hóa - con người, và Đối ngoại",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/zo0XmiVA30Q",
                            caption:
                                "Video: Chủ nghĩa xã hội không bao giờ lỗi thời.",
                        },
                    ],
                },
                {
                    id: "3-2",
                    chapterTitle: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
                    title: "3.2. Tính tất yếu khách quan của sự ra đời CNXH",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Sự ra đời của CNXH là một quy luật khách quan, bắt nguồn từ chính những mâu thuẫn nội tại không thể giải quyết trong lòng chủ nghĩa tư bản (CNTB).",
                        },
                        {
                            type: "list",
                            items: [
                                "Mâu thuẫn cơ bản của CNTB: Đó là mâu thuẫn giữa tính chất xã hội hóa ngày càng cao của lực lượng sản xuất và chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất. Mâu thuẫn này biểu hiện về mặt xã hội là mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản.",
                                "Lực lượng thực hiện bước chuyển: Giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản, là lực lượng xã hội có sứ mệnh lịch sử thực hiện bước chuyển từ CNTB sang CNXH.",
                                "Quy luật phát triển tất yếu: C. Mác và V.I. Lênin đã chứng minh rằng sự thay thế CNTB bằng CNXH là một quy luật phát triển tất yếu của lịch sử nhân loại, giống như CNTB đã từng thay thế chế độ phong kiến.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sự ra đời của CNXH là tất yếu khách quan._1763065084122.png",
                            caption:
                                "Tính tất yếu khách quan của sự ra đời Chủ nghĩa Xã hội",
                        },
                        {
                            type: "image",
                            url: "images/Biểu tình CNXH_1761941253871.jpg",
                            caption:
                                "Các cuộc đấu tranh của giai cấp công nhân phản ánh mâu thuẫn gay gắt trong lòng xã hội tư bản.",
                        },
                    ],
                },
                {
                    id: "3-3",
                    chapterTitle: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
                    title: "3.3. Thời kỳ quá độ lên CNXH",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Thời kỳ quá độ (TKQĐ) là giai đoạn lịch sử tất yếu để chuyển từ xã hội tư bản sang xã hội xã hội chủ nghĩa.",
                        },
                        {
                            type: "image",
                            url: "images/Thời kỳ quá độ_1761941253870.jpg",
                            caption:
                                "Dưới sự lãnh đạo của Đảng, nhân dân tiến lên xây dựng Chủ nghĩa Xã hội.",
                        },
                        {
                            type: "list",
                            items: [
                                "Là thời kỳ lịch sử tất yếu từ khi giai cấp công nhân giành chính quyền đến khi xây dựng thành công CNXH.",
                                "Là giai đoạn cải biến sâu sắc, toàn diện mọi lĩnh vực: kinh tế, chính trị, xã hội, văn hóa, tư tưởng.",
                            ],
                        },
                        {
                            type: "paragraph",
                            text: "Đặc điểm của thời kỳ quá độ:",
                        },
                        {
                            type: "list",
                            items: [
                                "Tồn tại đan xen hai yếu tố: cũ (TBCN) và mới (XHCN).",
                                "Là thời kỳ đấu tranh phức tạp giữa con đường xã hội chủ nghĩa và con đường tư bản chủ nghĩa.",
                                "Kinh tế nhiều thành phần, trong đó kinh tế nhà nước giữ vai trò chủ đạo.",
                                "Nhà nước chuyên chính vô sản giữ vai trò tổ chức, quản lý, định hướng phát triển.",
                                "Công tác tư tưởng – văn hóa đóng vai trò trung tâm để xây dựng con người mới XHCN.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Đặc điểm của thời kỳ quá độ_1763065084124.png",
                            caption:
                                "Các đặc điểm của thời kỳ quá độ: Tồn tại đan xen hai yếu tố cũ và mới, Đấu tranh phức tạp, Nhà nước chuyên chính vô sản, Kinh tế nhiều thành phần, Công tác tư tưởng - văn hóa",
                        },
                        {
                            type: "paragraph",
                            text: "Nhiệm vụ cơ bản của TKQĐ bao gồm:",
                        },
                        {
                            type: "list",
                            items: [
                                "Về kinh tế: Xây dựng nền kinh tế nhiều thành phần, từng bước phát triển lực lượng sản xuất, lấy công nghiệp hóa – hiện đại hóa làm trung tâm.",
                                "Về chính trị: Giữ vững và tăng cường vai trò lãnh đạo của Đảng Cộng sản và nhà nước XHCN, xây dựng nền dân chủ XHCN.",
                                "Về xã hội: Xóa bỏ dần sự phân hóa giai cấp, thực hiện bình đẳng, công bằng xã hội.",
                                "Về tư tưởng – văn hóa: Xây dựng hệ giá trị, đạo đức, lối sống mới; đấu tranh chống các tư tưởng phản động, lạc hậu.",
                                "Về quốc phòng – đối ngoại: Bảo vệ vững chắc Tổ quốc XHCN, mở rộng hợp tác quốc tế.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Nhiệm vụ cơ bản của thời kỳ quá độ_1763065084123.png",
                            caption:
                                "Nhiệm vụ cơ bản của thời kỳ quá độ trên các lĩnh vực: Phát triển kinh tế, Hình thức chính trị, Quốc phòng và đối ngoại, Giải trí văn hóa, Bình đẳng xã hội",
                        },
                    ],
                },
                {
                    id: "3-4",
                    chapterTitle: "Chương 3: CNXH và thời kỳ quá độ lên CNXH",
                    title: "3.4. Thời kỳ quá độ lên CNXH ở Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "image",
                            url: "images/Công nghiệp hóa trong thời kỳ quá độ ở VN_1761941253871.jpg",
                            caption:
                                "Công nghiệp hóa, hiện đại hóa là nhiệm vụ trung tâm trong thời kỳ quá độ ở Việt Nam.",
                        },
                        {
                            type: "paragraph",
                            text: "Việt Nam quá độ lên CNXH từ một nước nông nghiệp lạc hậu, bỏ qua chế độ tư bản chủ nghĩa, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và lấy chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh làm nền tảng.",
                        },
                        {
                            type: "paragraph",
                            text: "Nội dung cơ bản của công cuộc đổi mới đất nước theo định hướng XHCN bao gồm:",
                        },
                        {
                            type: "list",
                            items: [
                                "Kinh tế: Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa; đẩy mạnh công nghiệp hóa, hiện đại hóa.",
                                "Chính trị: Xây dựng Nhà nước pháp quyền XHCN của nhân dân; củng cố đại đoàn kết dân tộc.",
                                "Văn hóa – xã hội: Phát triển giáo dục, khoa học – công nghệ; bảo đảm an sinh xã hội.",
                                "Đối ngoại: Hội nhập quốc tế, giữ vững độc lập – tự chủ, vì hòa bình và phát triển.",
                            ],
                        },
                        {
                            type: "image",
                            url: "images/Hiện đại hóa_1761941253870.jpg",
                            caption:
                                "Việt Nam đẩy mạnh cải cách hành chính, xây dựng dịch vụ công trực tuyến phục vụ nhân dân.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/fiLdxRn9K-A",
                            caption:
                                "Video: Đổi mới toàn diện đất nước theo định hướng XHCN.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/bd16IDpQ5rY",
                            caption:
                                "Video: Ngọn cờ đưa đất nước đổi mới toàn diện.",
                        },
                        {
                            type: "paragraph",
                            text: "Mục tiêu tổng quát mà Đảng và nhân dân ta đang xây dựng là “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.” Việc nhận thức đúng đắn và thực hiện thành công con đường đi lên CNXH có ý nghĩa khẳng định tính tất yếu và lâu dài của con đường mà Đảng và Bác Hồ đã lựa chọn.",
                        },
                        {
                            type: "paragraph",
                            text: "Ý nghĩa:",
                        },
                        {
                            type: "list",
                            items: [
                                "Khẳng định tính tất yếu và tính lâu dài của con đường đi lên CNXH.",
                                "Giúp nhận thức đúng mục tiêu, phương hướng và nhiệm vụ của công cuộc đổi mới ở Việt Nam hiện nay.",
                                "Là cơ sở để giữ vững niềm tin khoa học vào lý tưởng XHCN và vai trò lãnh đạo của Đảng.",
                            ],
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Chủ nghĩa xã hội được hiểu theo mấy nghĩa cơ bản?",
                    options: [
                        "Hai nghĩa",
                        "Ba nghĩa",
                        "Bốn nghĩa",
                        "Năm nghĩa",
                    ],
                    correctAnswer: "Bốn nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ai là người đã xây dựng học thuyết hình thái kinh tế - xã hội?",
                    options: [
                        "V.I. Lênin",
                        "C. Mác và Ph. Ăngghen",
                        "Stalin",
                        "Hegel",
                    ],
                    correctAnswer: "C. Mác và Ph. Ăngghen",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo học thuyết của chủ nghĩa Mác - Lênin, sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái cộng sản chủ nghĩa là gì?",
                    options: [
                        "Một sự kiện chính trị ngẫu nhiên",
                        "Một quá trình lịch sử - tự nhiên",
                        "Một hoạt động tôn giáo",
                        "Một quyết định chính trị",
                    ],
                    correctAnswer: "Một quá trình lịch sử - tự nhiên",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong “Phê phán cương lĩnh Gôta”, C. Mác cho rằng giữa xã hội tư bản và xã hội cộng sản có gì?",
                    options: [
                        "Một thời kỳ ổn định",
                        "Một thời kỳ quá độ chính trị",
                        "Một thời kỳ khủng hoảng",
                        "Một thời kỳ chiến tranh",
                    ],
                    correctAnswer: "Một thời kỳ quá độ chính trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I. Lênin, đối với những nước chưa có chủ nghĩa tư bản phát triển, cần có gì?",
                    options: [
                        "Thời kỳ quá độ lâu dài lên chủ nghĩa xã hội",
                        "Thời kỳ phong kiến kéo dài",
                        "Thời kỳ cải cách dân chủ",
                        "Thời kỳ công nghiệp hóa nhanh",
                    ],
                    correctAnswer:
                        "Thời kỳ quá độ lâu dài lên chủ nghĩa xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hai điều kiện vật chất quan trọng dẫn đến cách mạng xã hội chủ nghĩa là gì?",
                    options: [
                        "Tăng trưởng kinh tế và chính trị ổn định",
                        "Phát triển lực lượng sản xuất và trưởng thành giai cấp công nhân",
                        "Nâng cao giáo dục và cải thiện y tế",
                        "Mở rộng thuộc địa và tăng dân số",
                    ],
                    correctAnswer:
                        "Phát triển lực lượng sản xuất và trưởng thành giai cấp công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo C. Mác và Ph. Ăngghen, mâu thuẫn cơ bản của chủ nghĩa tư bản là giữa:",
                    options: [
                        "Nhà nước và nhân dân",
                        "Lực lượng sản xuất xã hội hóa và quan hệ sản xuất tư hữu",
                        "Tư bản và nông dân",
                        "Chính trị và tôn giáo",
                    ],
                    correctAnswer:
                        "Lực lượng sản xuất xã hội hóa và quan hệ sản xuất tư hữu",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Cách mạng vô sản là cuộc cách mạng của ai dưới sự lãnh đạo của Đảng Cộng sản?",
                    options: [
                        "Giai cấp tư sản",
                        "Giai cấp nông dân",
                        "Giai cấp công nhân và nhân dân lao động",
                        "Giới trí thức",
                    ],
                    correctAnswer: "Giai cấp công nhân và nhân dân lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc trưng cơ bản đầu tiên của chủ nghĩa xã hội là gì?",
                    options: [
                        "Giải phóng giai cấp, dân tộc, xã hội và con người",
                        "Phát triển công nghiệp nặng",
                        "Nâng cao năng suất lao động",
                        "Xây dựng nền dân chủ tư sản",
                    ],
                    correctAnswer:
                        "Giải phóng giai cấp, dân tộc, xã hội và con người",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I. Lênin, mục tiêu cuối cùng của chủ nghĩa xã hội là thực hiện nguyên tắc nào?",
                    options: [
                        "Làm theo năng lực, hưởng theo nhu cầu",
                        "Làm theo năng lực, hưởng theo công sức",
                        "Làm nhiều hưởng nhiều",
                        "Bình đẳng tuyệt đối về của cải",
                    ],
                    correctAnswer: "Làm theo năng lực, hưởng theo nhu cầu",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo C. Mác, giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa tồn tại một thời kỳ nào?",
                    options: [
                        "Thời kỳ ổn định chính trị",
                        "Thời kỳ quá độ chính trị",
                        "Thời kỳ khủng hoảng kinh tế",
                        "Thời kỳ cải cách dân chủ",
                    ],
                    correctAnswer: "Thời kỳ quá độ chính trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I. Lênin, giữa chủ nghĩa tư bản và chủ nghĩa cộng sản có một thời kỳ quá độ mang tính gì?",
                    options: [
                        "Tạm thời và ngẫu nhiên",
                        "Tất yếu khách quan",
                        "Chính trị thuần túy",
                        "Kinh tế cục bộ",
                    ],
                    correctAnswer: "Tất yếu khách quan",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội ở các nước như Việt Nam được xem là loại quá độ nào?",
                    options: ["Trực tiếp", "Gián tiếp", "Hỗn hợp", "Rút ngắn"],
                    correctAnswer: "Gián tiếp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo quan điểm Mác - Lênin, các nước lạc hậu có thể tiến lên chủ nghĩa xã hội mà không cần trải qua giai đoạn tư bản chủ nghĩa nhờ yếu tố nào?",
                    options: [
                        "Sự giúp đỡ của giai cấp vô sản đã chiến thắng",
                        "Sự phát triển của nông nghiệp",
                        "Sự hỗ trợ của các nước tư bản",
                        "Sự bùng nổ dân số",
                    ],
                    correctAnswer:
                        "Sự giúp đỡ của giai cấp vô sản đã chiến thắng",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                    options: [
                        "Giai đoạn phát triển kinh tế thị trường",
                        "Thời kỳ cải biến cách mạng từ xã hội cũ sang xã hội mới",
                        "Thời kỳ ổn định xã hội và chính trị",
                        "Giai đoạn công nghiệp hóa tư bản chủ nghĩa",
                    ],
                    correctAnswer:
                        "Thời kỳ cải biến cách mạng từ xã hội cũ sang xã hội mới",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lĩnh vực kinh tế, thời kỳ quá độ lên chủ nghĩa xã hội tồn tại hình thức nào sau đây?",
                    options: [
                        "Một thành phần kinh tế duy nhất",
                        "Nền kinh tế tập trung hóa",
                        "Nền kinh tế nhiều thành phần",
                        "Nền kinh tế tự cung tự cấp",
                    ],
                    correctAnswer: "Nền kinh tế nhiều thành phần",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I. Lênin, trong thời kỳ quá độ ở Nga tồn tại bao nhiêu thành phần kinh tế cơ bản?",
                    options: ["Ba", "Bốn", "Năm", "Sáu"],
                    correctAnswer: "Năm",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lĩnh vực chính trị, đặc trưng nổi bật của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                    options: [
                        "Thiết lập và tăng cường chuyên chính vô sản",
                        "Duy trì chế độ dân chủ tư sản",
                        "Xóa bỏ hoàn toàn nhà nước",
                        "Phát triển tự do đa đảng",
                    ],
                    correctAnswer:
                        "Thiết lập và tăng cường chuyên chính vô sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lĩnh vực tư tưởng - văn hóa, nhiệm vụ của giai cấp công nhân là gì?",
                    options: [
                        "Duy trì văn hóa cũ",
                        "Xây dựng văn hóa vô sản và nền văn hóa mới xã hội chủ nghĩa",
                        "Bài trừ toàn bộ giá trị văn hóa nhân loại",
                        "Phát triển văn hóa tư sản tiến bộ",
                    ],
                    correctAnswer:
                        "Xây dựng văn hóa vô sản và nền văn hóa mới xã hội chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lĩnh vực xã hội, nguyên tắc phân phối chủ đạo trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                    options: [
                        "Phân phối theo nhu cầu",
                        "Phân phối bình quân",
                        "Phân phối theo lao động",
                        "Phân phối theo tài sản",
                    ],
                    correctAnswer: "Phân phối theo lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam được Đảng ta xác định là",
                    options: [
                        "Con đường phát triển tạm thời trong giai đoạn đổi mới",
                        "Con đường cách mạng tất yếu, khách quan của dân tộc Việt Nam",
                        "Một bước lùi chiến lược nhằm ổn định xã hội",
                        "Giải pháp ngắn hạn cho phát triển kinh tế",
                    ],
                    correctAnswer:
                        "Con đường cách mạng tất yếu, khách quan của dân tộc Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question: "“Bỏ qua chế độ tư bản chủ nghĩa” được hiểu là",
                    options: [
                        "Không phát triển kinh tế hàng hóa",
                        "Không tiếp thu thành tựu của chủ nghĩa tư bản",
                        "Không xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
                        "Không có thành phần kinh tế tư nhân",
                    ],
                    correctAnswer:
                        "Không xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Đại hội IX, Việt Nam “bỏ qua chế độ tư bản chủ nghĩa” nhưng vẫn",
                    options: [
                        "Loại bỏ toàn bộ yếu tố của chủ nghĩa tư bản",
                        "Tiếp thu và kế thừa thành tựu khoa học, công nghệ của nhân loại",
                        "Không chấp nhận kinh tế thị trường",
                        "Duy trì quan hệ bóc lột tư bản chủ nghĩa làm chủ đạo",
                    ],
                    correctAnswer:
                        "Tiếp thu và kế thừa thành tựu khoa học, công nghệ của nhân loại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, quan hệ bóc lột tư bản chủ nghĩa ở Việt Nam",
                    options: [
                        "Giữ vai trò thống trị",
                        "Bị xoá bỏ hoàn toàn",
                        "Còn tồn tại nhưng không giữ vai trò thống trị",
                        "Là hình thức phân phối chủ yếu",
                    ],
                    correctAnswer:
                        "Còn tồn tại nhưng không giữ vai trò thống trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những đặc trưng bản chất của chủ nghĩa xã hội Việt Nam là",
                    options: [
                        "Kinh tế tập trung bao cấp làm chủ đạo",
                        "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
                        "Mọi dân tộc đều phát triển riêng biệt, tự lập",
                        "Nhà nước quản lý theo cơ chế mệnh lệnh hành chính",
                    ],
                    correctAnswer:
                        "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc trưng “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh” thể hiện",
                    options: [
                        "Mục tiêu tổng quát của chủ nghĩa xã hội Việt Nam",
                        "Đặc điểm kinh tế chủ yếu",
                        "Chính sách văn hóa – xã hội",
                        "Tính chất giai cấp của nhà nước",
                    ],
                    correctAnswer:
                        "Mục tiêu tổng quát của chủ nghĩa xã hội Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question: "Theo Cương lĩnh năm 2011, Việt Nam xác định có",
                    options: [
                        "6 đặc trưng và 7 phương hướng xây dựng CNXH",
                        "8 đặc trưng và 8 phương hướng xây dựng CNXH",
                        "7 đặc trưng và 9 phương hướng xây dựng CNXH",
                        "8 đặc trưng và 9 nhiệm vụ phát triển kinh tế",
                    ],
                    correctAnswer:
                        "8 đặc trưng và 8 phương hướng xây dựng CNXH",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong tám phương hướng cơ bản xây dựng chủ nghĩa xã hội ở Việt Nam là",
                    options: [
                        "Tăng cường công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức",
                        "Xóa bỏ kinh tế thị trường",
                        "Hạn chế hội nhập quốc tế để bảo vệ chủ quyền",
                        "Thực hiện chuyên chính vô sản trong mọi lĩnh vực",
                    ],
                    correctAnswer:
                        "Tăng cường công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mối quan hệ “giữa đổi mới kinh tế và đổi mới chính trị” được Đảng xác định",
                    options: [
                        "Là vấn đề thứ yếu trong công cuộc đổi mới",
                        "Là một trong những mối quan hệ lớn cần giải quyết đúng đắn",
                        "Là nhiệm vụ của riêng hệ thống chính trị",
                        "Không còn quan trọng trong giai đoạn hội nhập",
                    ],
                    correctAnswer:
                        "Là một trong những mối quan hệ lớn cần giải quyết đúng đắn",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đại hội XII của Đảng xác định mục tiêu đến giữa thế kỷ XXI là",
                    options: [
                        "Xây dựng Việt Nam thành nước công nghiệp hóa theo hướng hiện đại",
                        "Duy trì nền kinh tế bao cấp",
                        "Giữ nguyên mô hình kinh tế cũ",
                        "Hạn chế hội nhập quốc tế để bảo vệ độc lập",
                    ],
                    correctAnswer:
                        "Xây dựng Việt Nam thành nước công nghiệp hóa theo hướng hiện đại",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Thời kỳ quá độ",
                            definition:
                                "Giai đoạn cải biến cách mạng từ xã hội tư bản sang xã hội cộng sản.",
                        },
                        {
                            term: "Đặc trưng CNXH",
                            definition:
                                "Xã hội do nhân dân lao động làm chủ, kinh tế phát triển cao, con người được giải phóng.",
                        },
                        {
                            term: "Bỏ qua chế độ TBCN",
                            definition:
                                "Con đường phát triển của Việt Nam lên CNXH.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối các đặc trưng của CNXH với nội dung cụ thể.",
                    pairs: [
                        {
                            term: "Đặc trưng kinh tế",
                            definition:
                                "Dựa trên chế độ công hữu, phát triển lực lượng sản xuất hiện đại.",
                        },
                        {
                            term: "Đặc trưng chính trị",
                            definition:
                                "Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
                        },
                        {
                            term: "Đặc trưng văn hóa",
                            definition:
                                "Xây dựng hệ giá trị mới: lao động, công bằng, nhân ái.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối mâu thuẫn cơ bản của CNTB với biểu hiện cụ thể.",
                    pairs: [
                        {
                            term: "Mâu thuẫn nội tại",
                            definition:
                                "Tính xã hội hóa của sản xuất và chiếm hữu tư nhân.",
                        },
                        {
                            term: "Biểu hiện xã hội",
                            definition:
                                "Mâu thuẫn giữa giai cấp công nhân và tư sản.",
                        },
                        {
                            term: "Giải pháp lịch sử",
                            definition:
                                "Cách mạng vô sản thay thế CNTB bằng CNXH.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối nhiệm vụ của TKQĐ với lĩnh vực tương ứng.",
                    pairs: [
                        {
                            term: "Nhiệm vụ kinh tế",
                            definition:
                                "Xây dựng nền kinh tế nhiều thành phần, công nghiệp hóa - hiện đại hóa.",
                        },
                        {
                            term: "Nhiệm vụ chính trị",
                            definition:
                                "Tăng cường vai trò Đảng và nhà nước XHCN.",
                        },
                        {
                            term: "Nhiệm vụ văn hóa",
                            definition:
                                "Xây dựng hệ giá trị mới, đấu tranh chống tư tưởng lạc hậu.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối đặc điểm TKQĐ ở Việt Nam với nội dung.",
                    pairs: [
                        {
                            term: "Xuất phát điểm",
                            definition:
                                "Từ nước nông nghiệp lạc hậu, bỏ qua CNTB.",
                        },
                        {
                            term: "Định hướng",
                            definition:
                                "Xây dựng kinh tế thị trường định hướng XHCN.",
                        },
                        {
                            term: "Nền tảng tư tưởng",
                            definition:
                                "Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các thành phần kinh tế trong TKQĐ với đặc điểm.",
                    pairs: [
                        {
                            term: "Kinh tế nhà nước",
                            definition:
                                "Vai trò chủ đạo, định hướng phát triển.",
                        },
                        {
                            term: "Kinh tế tập thể",
                            definition:
                                "Hợp tác xã, liên kết sản xuất nông nghiệp.",
                        },
                        {
                            term: "Kinh tế tư nhân",
                            definition:
                                "Phát triển trong khuôn khổ pháp luật, phục vụ lợi ích chung.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-4",
            title: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
            sections: [
                {
                    id: "4-1",
                    chapterTitle: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
                    title: "4.1. Khái niệm và bản chất của dân chủ XHCN",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Dân chủ, theo nguyên gốc tiếng Hy Lạp (demos – người dân, kratos – quyền lực), có nghĩa là quyền lực thuộc về nhân dân. Đây là một giá trị phổ quát của nhân loại nhưng luôn mang bản chất giai cấp, tùy thuộc vào lực lượng nắm giữ quyền lực trong xã hội.",
                        },
                        {
                            type: "image",
                            url: "images/Quyền lực của nhân dân_1762373560414.jpg",
                            caption:
                                "Quyền lực thuộc về nhân dân được thể hiện qua lá phiếu bầu cử.",
                        },
                        {
                            type: "paragraph",
                            text: "Bản chất của dân chủ xã hội chủ nghĩa (DCXHCN) là nền dân chủ của đại đa số nhân dân lao động, được thực hiện thông qua nhà nước xã hội chủ nghĩa và dưới sự lãnh đạo của Đảng Cộng sản.",
                        },
                        {
                            type: "list",
                            items: [
                                "Đây là nền dân chủ rộng rãi nhất trong lịch sử, vì lần đầu tiên, đa số nhân dân trở thành chủ thể thực sự của quyền lực.",
                                "Thực hiện quyền làm chủ của nhân dân trên mọi lĩnh vực: kinh tế, chính trị, văn hóa, xã hội.",
                                "Gắn liền với chuyên chính vô sản, thực hiện dân chủ với nhân dân đồng thời chuyên chính với các thế lực thù địch của nhân dân.",
                            ],
                        },
                        {
                            type: "paragraph",
                            text: "Mỗi kiểu dân chủ trong lịch sử (chiếm hữu nô lệ, tư sản, xã hội chủ nghĩa...) đều mang dấu ấn của giai cấp cầm quyền. Dân chủ xã hội chủ nghĩa mang bản chất của giai cấp công nhân và toàn thể nhân dân lao động, bảo đảm lợi ích cho số đông.",
                        },
                        {
                            type: "diagram",
                            url: "/images/Nền dân chủ rộng rãi nhất trong lịch sử_1763070544963.png",
                            caption:
                                "Nền dân chủ xã hội chủ nghĩa - nền dân chủ rộng rãi nhất trong lịch sử.",
                        },
                    ],
                },
                {
                    id: "4-2",
                    chapterTitle: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
                    title: "4.2. Nhà nước XHCN và mối quan hệ với dân chủ",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Dân chủ và nhà nước có mối quan hệ biện chứng. Dân chủ là bản chất của nhà nước XHCN, còn nhà nước là công cụ để thực hiện dân chủ. Quyền làm chủ của nhân dân chỉ có thể trở thành hiện thực thông qua bộ máy nhà nước và hệ thống pháp luật. Do đó, nhà nước XHCN chính là hình thức tổ chức chính trị của nền dân chủ XHCN.",
                        },
                        {
                            type: "diagram",
                            url: "/images/Mối quan hệ giữa dân chủ và nhà nước_1763070544963.png",
                            caption:
                                "Mối quan hệ biện chứng giữa dân chủ và nhà nước XHCN.",
                        },
                        {
                            type: "paragraph",
                            text: "Nhà nước XHCN là nhà nước kiểu mới, ra đời sau khi giai cấp công nhân và nhân dân lao động giành được chính quyền, nhằm tổ chức và quản lý xã hội mới, xây dựng và bảo vệ CNXH, thực hiện quyền làm chủ của nhân dân. Bản chất của nhà nước XHCN được thể hiện trên các mặt:",
                        },
                        {
                            type: "list",
                            items: [
                                "Về giai cấp: Là công cụ thực hiện quyền lực của giai cấp công nhân và nhân dân lao động, mang bản chất giai cấp công nhân, đồng thời có tính nhân dân và tính dân tộc sâu sắc.",
                                "Về tổ chức quyền lực: Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp, tư pháp.",
                                "Về mục tiêu hoạt động: Phục vụ lợi ích của nhân dân, phát triển kinh tế, văn hóa, xã hội theo định hướng XHCN, bảo đảo quyền làm chủ, tự do, bình đẳng của công dân.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Bản chất của nhà nước XHCN_1763070544962.png",
                            caption:
                                "Bản chất của nhà nước xã hội chủ nghĩa.",
                        },
                        {
                            type: "paragraph",
                            text: "Nhà nước XHCN có hai chức năng cơ bản là đối nội và đối ngoại:",
                        },
                        {
                            type: "list",
                            items: [
                                "Chức năng đối nội: Tổ chức, quản lý kinh tế, văn hóa, xã hội; bảo vệ quyền và lợi ích hợp pháp của nhân dân; trấn áp các thế lực thù địch, chống phá.",
                                "Chức năng đối ngoại: Bảo vệ Tổ quốc, giữ vững độc lập, chủ quyền; mở rộng hợp tác hữu nghị, bình đẳng với các quốc gia khác.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "/images/Chức năng cơ bản của nhà nước XHCN_1763070544961.png",
                            caption:
                                "Chức năng cơ bản của nhà nước xã hội chủ nghĩa.",
                        },
                    ],
                },
                {
                    id: "4-3",
                    chapterTitle: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
                    title: "4.3. Nhà nước pháp quyền XHCN Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân. Tất cả quyền lực nhà nước thuộc về nhân dân, được thực hiện thông qua Quốc hội và các cơ quan dân cử dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.",
                        },
                        {
                            type: "image",
                            url: "images/Thượng tôn pháp luật_1762373560413.jpg",
                            caption:
                                "Nhà nước pháp quyền XHCN Việt Nam đề cao sự thượng tôn pháp luật.",
                        },
                        {
                            type: "paragraph",
                            text: "Đặc điểm cơ bản của Nhà nước pháp quyền XHCN Việt Nam bao gồm:",
                        },
                        {
                            type: "list",
                            items: [
                                "Thượng tôn pháp luật, mọi tổ chức và cá nhân đều bình đẳng trước pháp luật.",
                                "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan.",
                                "Gắn bó mật thiết với nhân dân, tôn trọng và bảo vệ quyền con người.",
                                "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, bảo đảm định hướng XHCN.",
                            ],
                        },
                        {
                            type: "image",
                            url: "images/Đặc điểm cơ bản của Nhà nước Pháp quyền XHCN Việt Nam_1763071033092.png",
                            caption:
                                "Đặc điểm cơ bản của Nhà nước Pháp quyền XHCN Việt Nam.",
                        },
                        {
                            type: "paragraph",
                            text: "Mục tiêu và phương hướng xây dựng Nhà nước pháp quyền XHCN Việt Nam là:",
                        },
                        {
                            type: "list",
                            items: [
                                "Xây dựng nhà nước trong sạch, vững mạnh, hoạt động hiệu lực, hiệu quả.",
                                "Tiếp tục cải cách hành chính, tư pháp, tăng cường pháp chế XHCN.",
                                "Phát huy dân chủ, chống quan liêu, tham nhũng, lãng phí.",
                            ],
                        },
                        {
                            type: "image",
                            url: "images/Mục tiêu và phương hướng xây dựng Nhà nước Pháp quyền XHCN Việt Nam_1763071033092.png",
                            caption:
                                "Mục tiêu và phương hướng xây dựng Nhà nước Pháp quyền XHCN Việt Nam.",
                        },
                    ],
                },
                {
                    id: "4-4",
                    chapterTitle: "Chương 4: Dân chủ XHCN và Nhà nước XHCN",
                    title: "4.4. Thực hành dân chủ và xây dựng nhà nước ở Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "image",
                            url: "images/Tiếp xúc cử tri_1762373560413.jpg",
                            caption:
                                "Đại biểu Quốc hội tiếp xúc cử tri, lắng nghe ý kiến, nguyện vọng của nhân dân.",
                        },
                        {
                            type: "paragraph",
                            text: "Việc thực hành dân chủ và xây dựng nhà nước XHCN ở Việt Nam hiện nay tập trung vào các nội dung sau:",
                        },
                        {
                            type: "list",
                            items: [
                                "Phát huy dân chủ phải đi đôi với tăng cường pháp chế, kỷ luật, kỷ cương.",
                                "Thực hiện hiệu quả phương châm: “Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.”",
                                "Hoàn thiện hệ thống pháp luật, xây dựng đội ngũ cán bộ, công chức “vừa hồng vừa chuyên”.",
                                "Tiếp tục đổi mới tổ chức và phương thức hoạt động của bộ máy nhà nước theo hướng tinh gọn, hiện đại, phục vụ nhân dân.",
                            ],
                        },
                        {
                            type: "image",
                            url: "images/Thực hành dân chủ và xây dựng nhà nước XHCN ở Việt Nam hiện nay_1763071033091.png",
                            caption:
                                "Thực hành dân chủ và xây dựng nhà nước XHCN ở Việt Nam hiện nay.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/f6TvNnlX81U",
                            caption:
                                "Thực hiện phương châm “Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng”.",
                        },
                        {
                            type: "paragraph",
                            text: "Ý nghĩa của việc xây dựng dân chủ và nhà nước XHCN:",
                        },
                        {
                            type: "list",
                            items: [
                                "Khẳng định dân chủ là bản chất của chế độ XHCN, là mục tiêu và động lực của công cuộc đổi mới.",
                                "Là cơ sở lý luận và thực tiễn cho việc xây dựng và hoàn thiện Nhà nước pháp quyền XHCN Việt Nam trong giai đoạn hiện nay.",
                                "Thể hiện bản chất nhân văn, tiến bộ và ưu việt của Chủ nghĩa xã hội.",
                            ],
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Thuật ngữ “dân chủ” (demokratos) ra đời vào thời kỳ nào?",
                    options: [
                        "Thế kỷ IX – VIII trước Công nguyên",
                        "Thế kỷ VII – VI trước Công nguyên",
                        "Thế kỷ V – IV trước Công nguyên",
                        "Thế kỷ III – II trước Công nguyên",
                    ],
                    correctAnswer: "Thế kỷ VII – VI trước Công nguyên",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo quan điểm của chủ nghĩa Mác – Lênin, dân chủ trước hết là gì?",
                    options: [
                        "Quyền lực thuộc về nhà nước",
                        "Quyền lực thuộc về nhân dân",
                        "Quyền tự do cá nhân tuyệt đối",
                        "Quyền của giai cấp cầm quyền",
                    ],
                    correctAnswer: "Quyền lực thuộc về nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Hồ Chí Minh, “chính phủ là người đầy tớ trung thành của nhân dân” thể hiện dân chủ ở phương diện nào?",
                    options: [
                        "Dân chủ như một giá trị xã hội",
                        "Dân chủ như một nguyên tắc tổ chức",
                        "Dân chủ như một thể chế chính trị",
                        "Dân chủ như một quyền tự nhiên",
                    ],
                    correctAnswer: "Dân chủ như một thể chế chính trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong các lĩnh vực đời sống, hai lĩnh vực quan trọng hàng đầu thể hiện dân chủ là:",
                    options: [
                        "Chính trị và văn hóa",
                        "Kinh tế và chính trị",
                        "Xã hội và tư tưởng",
                        "Kinh tế và văn hóa",
                    ],
                    correctAnswer: "Kinh tế và chính trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo chủ nghĩa Mác – Lênin, dân chủ ra đời gắn liền với sự xuất hiện của:",
                    options: [
                        "Nhà nước và xã hội loài người",
                        "Các cuộc cách mạng công nghiệp",
                        "Nền văn minh Hy Lạp cổ đại",
                        "Các tôn giáo lớn",
                    ],
                    correctAnswer: "Nhà nước và xã hội loài người",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lịch sử, nền dân chủ nào được xem là hình thức dân chủ đầu tiên của loài người?",
                    options: [
                        "Dân chủ tư sản",
                        "Dân chủ chủ nô",
                        "Dân chủ nguyên thủy",
                        "Dân chủ xã hội chủ nghĩa",
                    ],
                    correctAnswer: "Dân chủ nguyên thủy",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nền dân chủ xã hội chủ nghĩa được xác lập chính thức sau sự kiện nào?",
                    options: [
                        "Cách mạng Pháp 1789",
                        "Công xã Paris 1871",
                        "Cách mạng Tháng Mười Nga 1917",
                        "Chiến tranh thế giới thứ hai",
                    ],
                    correctAnswer: "Cách mạng Tháng Mười Nga 1917",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc trưng cơ bản của nền dân chủ xã hội chủ nghĩa là gì?",
                    options: [
                        "Quyền lực thuộc về giai cấp tư sản",
                        "Quyền lực thuộc về nhân dân lao động",
                        "Quyền lực tập trung vào nhà nước",
                        "Quyền lực chia đều giữa các giai cấp",
                    ],
                    correctAnswer: "Quyền lực thuộc về nhân dân lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I.Lênin, quá trình hoàn thiện dân chủ xã hội chủ nghĩa dẫn tới điều gì?",
                    options: [
                        "Dân chủ ngày càng mở rộng và tự tiêu vong",
                        "Nhà nước trở nên chuyên chế hơn",
                        "Xóa bỏ hoàn toàn mọi hình thức dân chủ",
                        "Dân chủ bị thay thế bằng pháp trị",
                    ],
                    correctAnswer: "Dân chủ ngày càng mở rộng và tự tiêu vong",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là gì?",
                    options: [
                        "Sự lãnh đạo của giai cấp tư sản đối với toàn xã hội",
                        "Sự lãnh đạo của đảng Mác – Lênin nhằm thực hiện quyền lực của nhân dân",
                        "Quyền lực tuyệt đối của nhà nước đối với nhân dân",
                        "Sự phân chia quyền lực giữa các giai cấp",
                    ],
                    correctAnswer:
                        "Sự lãnh đạo của đảng Mác – Lênin nhằm thực hiện quyền lực của nhân dân",
                },
                {
                    type: "multiple-choice",
                    question: "Nhà nước xã hội chủ nghĩa ra đời là kết quả của",
                    options: [
                        "Cuộc cách mạng dân tộc tư sản do giai cấp tư sản lãnh đạo",
                        "Cuộc cách mạng vô sản do giai cấp công nhân và nhân dân lao động tiến hành",
                        "Sự cải cách trong xã hội phong kiến",
                        "Sự phát triển tự nhiên của lực lượng sản xuất",
                    ],
                    correctAnswer:
                        "Cuộc cách mạng vô sản do giai cấp công nhân và nhân dân lao động tiến hành",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Cơ sở lý luận giúp giai cấp vô sản tổ chức và tiến hành cách mạng là",
                    options: [
                        "Tư tưởng Khai sáng",
                        "Chủ nghĩa Mác – Lênin",
                        "Tư tưởng dân chủ tư sản",
                        "Học thuyết về nhà nước pháp quyền",
                    ],
                    correctAnswer: "Chủ nghĩa Mác – Lênin",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Bản chất chính trị của nhà nước xã hội chủ nghĩa là",
                    options: [
                        "Mang bản chất của giai cấp công nhân, đại biểu cho ý chí của nhân dân lao động",
                        "Mang bản chất của giai cấp tư sản, đại diện cho tầng lớp trí thức",
                        "Mang bản chất của toàn dân, không đại diện cho giai cấp nào",
                        "Mang bản chất của nhà nước pháp quyền hiện đại",
                    ],
                    correctAnswer:
                        "Mang bản chất của giai cấp công nhân, đại biểu cho ý chí của nhân dân lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Về kinh tế, nhà nước xã hội chủ nghĩa được xây dựng trên cơ sở",
                    options: [
                        "Chế độ tư hữu về tư liệu sản xuất",
                        "Chế độ công hữu và sở hữu xã hội về tư liệu sản xuất chủ yếu",
                        "Nền kinh tế thị trường tự do hoàn toàn",
                        "Quan hệ sản xuất bóc lột",
                    ],
                    correctAnswer:
                        "Chế độ công hữu và sở hữu xã hội về tư liệu sản xuất chủ yếu",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Lênin, nhà nước xã hội chủ nghĩa chỉ là “nửa nhà nước” vì",
                    options: [
                        "Nó không có cơ quan cưỡng chế",
                        "Nó không còn phục vụ lợi ích riêng của giai cấp bóc lột mà của đa số nhân dân",
                        "Nó chỉ tồn tại trong thời gian ngắn",
                        "Nó hoạt động chủ yếu về văn hóa – xã hội",
                    ],
                    correctAnswer:
                        "Nó không còn phục vụ lợi ích riêng của giai cấp bóc lột mà của đa số nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Chức năng cơ bản của nhà nước xã hội chủ nghĩa bao gồm",
                    options: [
                        "Chức năng đối nội và chức năng đối ngoại",
                        "Chức năng lập pháp, hành pháp và tư pháp",
                        "Chức năng chính trị và tôn giáo",
                        "Chức năng quản lý và kiểm soát",
                    ],
                    correctAnswer: "Chức năng đối nội và chức năng đối ngoại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong nhà nước xã hội chủ nghĩa, chức năng trấn áp nhằm",
                    options: [
                        "Duy trì đặc quyền của giai cấp cầm quyền tư sản",
                        "Bảo vệ thành quả cách mạng, chống lại giai cấp bóc lột và phần tử chống đối",
                        "Tăng cường quyền lực của bộ máy hành chính",
                        "Đàn áp phong trào công nhân",
                    ],
                    correctAnswer:
                        "Bảo vệ thành quả cách mạng, chống lại giai cấp bóc lột và phần tử chống đối",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Lênin, điều kiện bảo đảm thắng lợi của nhà nước xã hội chủ nghĩa là",
                    options: [
                        "Duy trì chế độ bóc lột ở mức tối thiểu",
                        "Tổ chức được kiểu lao động có năng suất cao hơn chủ nghĩa tư bản",
                        "Giữ vững quan hệ sản xuất cũ",
                        "Mở rộng quan hệ thương mại với các nước tư bản",
                    ],
                    correctAnswer:
                        "Tổ chức được kiểu lao động có năng suất cao hơn chủ nghĩa tư bản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa thể hiện ở chỗ",
                    options: [
                        "Nhà nước là công cụ để thực hiện quyền làm chủ của nhân dân",
                        "Nhà nước tách biệt với nền dân chủ",
                        "Dân chủ chỉ là hình thức chính trị không liên quan đến nhà nước",
                        "Dân chủ bị thay thế bởi quyền lực nhà nước",
                    ],
                    correctAnswer:
                        "Nhà nước là công cụ để thực hiện quyền làm chủ của nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong hệ thống chính trị xã hội chủ nghĩa, Đảng Cộng sản xem Nhà nước là",
                    options: [
                        "Cơ quan hành chính bình thường",
                        "Một thiết chế phụ thuộc vào tổ chức xã hội",
                        "Trụ cột, công cụ chủ yếu và vững mạnh của nhân dân trong xây dựng, bảo vệ Tổ quốc",
                        "Cơ quan tư pháp trung gian",
                    ],
                    correctAnswer:
                        "Trụ cột, công cụ chủ yếu và vững mạnh của nhân dân trong xây dựng, bảo vệ Tổ quốc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nền dân chủ nhân dân ở Việt Nam được xác lập sau sự kiện lịch sử nào?",
                    options: [
                        "Đại hội Đảng lần thứ II",
                        "Kháng chiến chống Pháp thành công",
                        "Thống nhất đất nước năm 1975",
                        "Cách mạng Tháng Tám năm 1945",
                    ],
                    correctAnswer: "Cách mạng Tháng Tám năm 1945",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đại hội VI của Đảng (1986) nhấn mạnh yếu tố nào là động lực mạnh mẽ cho phát triển đất nước?",
                    options: [
                        "Phát triển khoa học – công nghệ",
                        "Đổi mới tư duy quản lý",
                        "Phát huy dân chủ",
                        "Mở rộng quan hệ quốc tế",
                    ],
                    correctAnswer: "Phát huy dân chủ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những đặc trưng của chủ nghĩa xã hội Việt Nam được Đảng ta khẳng định là gì?",
                    options: [
                        "Nhà nước tập trung quyền lực",
                        "Do nhân dân làm chủ",
                        "Kinh tế tập thể là chủ đạo",
                        "Đề cao pháp luật hơn dân chủ",
                    ],
                    correctAnswer: "Do nhân dân làm chủ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Hồ Chí Minh, quyền hành và lực lượng của nước ta thuộc về ai?",
                    options: [
                        "Đảng Cộng sản Việt Nam",
                        "Chính phủ và Quốc hội",
                        "Các cơ quan nhà nước",
                        "Nhân dân",
                    ],
                    correctAnswer: "Nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hình thức dân chủ gián tiếp ở Việt Nam được thể hiện chủ yếu qua cơ quan nào?",
                    options: [
                        "Chính phủ",
                        "Mặt trận Tổ quốc Việt Nam",
                        "Hội đồng nhân dân các cấp",
                        "Quốc hội",
                    ],
                    correctAnswer: "Quốc hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hình thức dân chủ trực tiếp ở Việt Nam thể hiện rõ nhất qua hoạt động nào sau đây?",
                    options: [
                        "Bầu cử đại biểu Quốc hội",
                        "Giám sát hoạt động của cơ quan nhà nước",
                        "Thành lập các cơ quan hành chính",
                        "Ban hành văn bản pháp luật",
                    ],
                    correctAnswer: "Giám sát hoạt động của cơ quan nhà nước",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nguyên tắc “Dân biết, dân bàn, dân làm, dân kiểm tra” thể hiện rõ nhất trong hoạt động nào?",
                    options: [
                        "Của các cơ quan tư pháp",
                        "Của Đảng Cộng sản Việt Nam",
                        "Của Nhà nước pháp quyền",
                        "Của quy chế dân chủ ở cơ sở",
                    ],
                    correctAnswer: "C ��a quy chế dân chủ ở cơ sở",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam là gì?",
                    options: [
                        "Phân tán quyền lực giữa các nhánh nhà nước",
                        "Không có sự lãnh đạo của Đảng",
                        "Quyền lực nhà nước thống nhất, có sự phân công và kiểm soát",
                        "Mọi quyền lực thuộc về cơ quan lập pháp",
                    ],
                    correctAnswer:
                        "Quyền lực nhà nước thống nhất, có sự phân công và kiểm soát",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam phải do ai lãnh đạo?",
                    options: [
                        "Nhân dân",
                        "Chính phủ",
                        "Quốc hội",
                        "Đảng Cộng sản Việt Nam",
                    ],
                    correctAnswer: "Đảng Cộng sản Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Điều kiện tiên quyết để xây dựng nền dân chủ xã hội chủ nghĩa ở Việt Nam là gì?",
                    options: [
                        "Phát triển kinh tế tư nhân",
                        "Mở rộng quan hệ đối ngoại",
                        "Đổi mới hệ thống giáo dục",
                        "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh",
                    ],
                    correctAnswer:
                        "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Dân chủ XHCN",
                            definition:
                                "Nền dân chủ rộng rãi cho nhân dân lao động, gắn liền với pháp luật.",
                        },
                        {
                            term: "Nhà nước XHCN",
                            definition:
                                "Công cụ thực hiện quyền lực của nhân dân, mang bản chất giai cấp công nhân.",
                        },
                        {
                            term: "Dân chủ trực tiếp",
                            definition:
                                "Nhân dân trực tiếp tham gia quyết định các công việc của nhà nước và xã hội.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-5",
            title: "Chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH",
            sections: [
                {
                    id: "5-1",
                    chapterTitle:
                        "Chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH",
                    title: "5.1. Khái niệm về cơ cấu xã hội và cơ cấu xã hội - giai cấp",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "image",
                            url: "images/Chủ tịch HCM thăm Sở Nông Lâm HN_1762375244254.PNG",
                            caption:
                                "Chủ tịch Hồ Chí Minh thăm Sở Nông Lâm Hà Nội, nhấn mạnh vai trò nông nghiệp và khoa học kỹ thuật đối với đời sống nhân dân.",
                        },
                        { type: "paragraph", text: "1.1. Cơ cấu xã hội" },
                        {
                            type: "list",
                            items: [
                                "Là tổng thể các mối quan hệ xã hội ổn định, được hình thành trong quá trình sản xuất, phân phối và tổ chức đời sống xã hội.",
                                "Bao gồm: cơ cấu giai cấp – tầng lớp, cơ cấu dân tộc, cơ cấu nghề nghiệp, cơ cấu vùng lãnh thổ, cơ cấu giới tính, độ tuổi, v.v.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ tổng quan về cơ cấu xã hội_1762377004029.jpg",
                            caption: "Sơ đồ tổng quan về cơ cấu xã hội.",
                        },
                        { type: "paragraph", text: "1.2. Cơ cấu giai cấp" },
                        {
                            type: "list",
                            items: [
                                "Là toàn bộ các giai cấp, tầng lớp xã hội, được xác lập dựa trên quan hệ của con người đối với tư liệu sản xuất.",
                                "Trong thời kỳ quá độ lên CNXH, cơ cấu giai cấp biến đổi mạnh mẽ, phản ánh quá trình xây dựng xã hội mới – XHCN.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ định nghĩa và đặc điểm cơ cấu giai cấp trong thời kỳ quá độ lên CNXH_1762377004028.jpg",
                            caption:
                                "Sơ đồ định nghĩa và đặc điểm cơ cấu giai cấp trong thời kỳ quá độ lên CNXH.",
                        },
                    ],
                },
                {
                    id: "5-2",
                    chapterTitle:
                        "Chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH",
                    title: "5.2. Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        { type: "paragraph", text: "2.1. Đặc điểm chung" },
                        {
                            type: "list",
                            items: [
                                "Tồn tại nhiều giai cấp, tầng lớp đan xen, trong đó giai cấp công nhân giữ vai trò lãnh đạo.",
                                "Có sự phân hóa về lợi ích, thu nhập, nghề nghiệp, song mục tiêu thống nhất là xây dựng CNXH.",
                                "Cơ cấu này chuyển hóa theo hướng tiến bộ, phù hợp với phát triển của lực lượng sản xuất và quan hệ sản xuất mới.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ các đặc điểm chung của cơ cấu xã hội - giai cấp trong thời kỳ quá độ_1762377004027.jpg",
                            caption:
                                "Sơ đồ các đặc điểm chung của cơ cấu xã hội - giai cấp trong thời kỳ quá độ.",
                        },
                        { type: "paragraph", text: "2.2. Xu hướng vận động" },
                        {
                            type: "list",
                            items: [
                                "Giảm dần sự đối kháng giai cấp, hướng tới bình đẳng, hợp tác.",
                                "Xuất hiện các tầng lớp xã hội mới (doanh nhân, trí thức, kỹ sư, nhà khoa học...).",
                                "Liên minh công – nông – trí thức trở thành nền tảng chính trị – xã hội của nhà nước XHCN.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ xu hướng vận động của cơ cấu xã hội_1762377004029.jpg",
                            caption:
                                "Sơ đồ xu hướng vận động của cơ cấu xã hội.",
                        },
                        {
                            type: "image",
                            url: "images/Đại hội Đảng lần VI_1762375244253.jpg",
                            caption:
                                "Từ mốc Đổi mới 1986, xu hướng vận động cơ cấu xã hội: CNH-HĐH, dịch chuyển lao động, hình thành/ lớn mạnh tầng lớp doanh nhân – trí thức.",
                        },
                        {
                            type: "diagram",
                            url: "images/Đại hội Đảng lần thứ VI_1762375244253.png",
                            caption:
                                "Đại hội VI của Đảng (12/1986) – khởi xướng Đổi mới, chuyển sang kinh tế nhiều thành phần, tác động sâu rộng tới cơ cấu xã hội-giai cấp.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/xFHawdU99KQ",
                            caption:
                                "Đại hội Đại biểu toàn quốc lần thứ VI của Đảng – Mở ra thời kỳ đổi mới đất nước | VOV",
                        },
                    ],
                },
                {
                    id: "5-3",
                    chapterTitle:
                        "Chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH",
                    title: "5.3. Liên minh giai cấp, tầng lớp trong thời kỳ quá độ",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "3.1. Khái niệm: Là sự đoàn kết, hợp tác lâu dài giữa các giai cấp, tầng lớp xã hội, nhằm thực hiện mục tiêu chung là xây dựng CNXH dưới sự lãnh đạo của Đảng Cộng sản.",
                        },
                        { type: "paragraph", text: "3.2. Cơ sở hình thành" },
                        {
                            type: "list",
                            items: [
                                "Kinh tế: Do yêu cầu phát triển lực lượng sản xuất và quan hệ sản xuất XHCN, cần sự phối hợp giữa các giai cấp trong sản xuất và phân phối.",
                                "Chính trị: Cần đoàn kết để giữ vững chính quyền, chống thù trong – giặc ngoài.",
                                "Tư tưởng – xã hội: Cùng hướng tới lý tưởng “Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.”",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ cơ sở hình thành liên minh giai cấp_1762377004027.jpg",
                            caption:
                                "Sơ đồ cơ sở hình thành liên minh giai cấp.",
                        },
                        {
                            type: "paragraph",
                            text: "3.3. Nội dung cơ bản của liên minh",
                        },
                        {
                            type: "list",
                            items: [
                                "Kinh tế: Hợp tác trong sản xuất, phân phối, phát triển kinh tế chung.",
                                "Chính trị: Thống nhất dưới sự lãnh đạo của Đảng; cùng tham gia xây dựng nhà nước XHCN.",
                                "Văn hóa – xã hội: Gắn bó, hỗ trợ trong giáo dục, đào tạo, nâng cao dân trí, xây dựng đời sống văn hóa mới.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ nội dung của liên minh giai cấp_1762377004028.jpg",
                            caption: "Sơ đồ nội dung của liên minh giai cấp.",
                        },
                    ],
                },
                {
                    id: "5-4",
                    chapterTitle:
                        "Chương 5: Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH",
                    title: "5.4. Liên minh công - nông - trí thức và thực trạng ở Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "Tính tất yếu, vai trò và phương hướng củng cố liên minh công - nông - trí thức.",
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ tổng quan về liên minh công - nông - trí thức_1762377004029.jpg",
                            caption:
                                "Sơ đồ tổng quan về liên minh công - nông - trí thức.",
                        },
                        {
                            type: "paragraph",
                            text: "Thực trạng ở Việt Nam hiện nay",
                        },
                        {
                            type: "list",
                            items: [
                                "Việt Nam hiện có cơ cấu xã hội đa dạng, gồm: Giai cấp công nhân, nông dân, tầng lớp trí thức, doanh nhân, cùng nhiều tầng lớp xã hội khác.",
                                "Các giai cấp đều thống nhất về lợi ích dân tộc, cùng hướng tới mục tiêu CNXH.",
                                "Vai trò của Đảng: Đảng Cộng sản Việt Nam là người tổ chức, lãnh đạo và bảo đảm sự đoàn kết trong liên minh giai cấp – tầng lớp. Đường lối là xây dựng khối đại đoàn kết toàn dân tộc trên nền tảng liên minh công – nông – trí thức.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ thực trạng và vai trò của Đảng đối với cơ cấu xã hội ở Việt Nam_1762377004029.jpg",
                            caption:
                                "Sơ đồ thực trạng và vai trò của Đảng đối với cơ cấu xã hội ở Việt Nam.",
                        },
                        {
                            type: "paragraph",
                            text: "Ý nghĩa của việc nghiên cứu và vận dụng",
                        },
                        {
                            type: "list",
                            items: [
                                "Thơ� hiện quy luật phát triển khách quan của xã hội trong thời kỳ quá độ.",
                                "Là điều kiện bảo đảm cho sự ổn định chính trị – xã hội và phát triển bền vững.",
                                "Là nền tảng vững chắc để thực hiện thắng lợi công cuộc đổi mới và xây dựng CNXH ở Việt Nam.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ ý nghĩa của việc nghiên cứu cơ cấu xã hội - giai cấp_1762377004030.jpg",
                            caption:
                                "Sơ đồ ý nghĩa của việc nghiên cứu cơ cấu xã hội - giai cấp.",
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội được hình thành dựa trên mối quan hệ nào?",
                    options: [
                        "Về giáo dục và văn hóa",
                        "Về sở hữu và tiêu dùng",
                        "Về kinh tế và đạo đức",
                        "Về sở hữu tư liệu sản xuất, quản lý sản xuất và địa vị chính trị - xã hội",
                    ],
                    correctAnswer:
                        "Về sở hữu tư liệu sản xuất, quản lý sản xuất và địa vị chính trị - xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong các loại hình cơ cấu xã hội, cơ cấu xã hội - giai cấp giữ vị trí quan trọng hàng đầu vì liên quan trực tiếp đến yếu tố nào?",
                    options: [
                        "Văn hóa và giáo dục",
                        "Môi trường và dân số",
                        "Nghề nghiệp và tôn giáo",
                        "Quyền sở hữu tư liệu sản xuất và quyền lực chính trị",
                    ],
                    correctAnswer:
                        "Quyền sở hữu tư liệu sản xuất và quyền lực chính trị",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, yếu tố quyết định mối quan hệ giữa các giai cấp, tầng lớp xã hội là gì?",
                    options: [
                        "Cùng phát triển kinh tế thị trường",
                        "Cùng cải tạo xã hội cũ và xây dựng xã hội mới",
                        "Cùng phát triển công nghệ và tri thức",
                        "Cùng hội nhập kinh tế quốc tế",
                    ],
                    correctAnswer:
                        "Cùng cải tạo xã hội cũ và xây dựng xã hội mới",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo nội dung học, cơ cấu xã hội - giai cấp giữ vai trò gì trong cơ cấu xã hội tổng thể?",
                    options: [
                        "Là yếu tố phụ thuộc vào cơ cấu dân cư",
                        "Có vai trò chi phối các cơ cấu xã hội khác",
                        "Là yếu tố thứ yếu trong phát triển xã hội",
                        "Chỉ có vai trò trong lĩnh vực chính trị",
                    ],
                    correctAnswer: "Có vai trò chi phối các cơ cấu xã hội khác",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Cơ cấu xã hội - giai cấp biến đổi chủ yếu do tác động của yếu tố nào trong thời kỳ quá độ lên chủ nghĩa xã hội?",
                    options: [
                        "Văn hóa và giáo dục",
                        "Sự thay đổi trong dân cư",
                        "Quá trình đô thị hóa",
                        "Cơ cấu kinh tế và phương thức sản xuất",
                    ],
                    correctAnswer: "Cơ cấu kinh tế và phương thức sản xuất",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Khi cơ cấu kinh tế chuyển dịch từ nông nghiệp sang công nghiệp và dịch vụ, điều gì tất yếu xảy ra?",
                    options: [
                        "Xã hội phân hóa sâu sắc hơn",
                        "Cơ cấu xã hội - giai cấp không thay đổi",
                        "Hình thành cơ cấu xã hội - giai cấp mới hiện đại hơn",
                        "Giai cấp nông dân trở thành giai cấp chủ đạo",
                    ],
                    correctAnswer:
                        "Hình thành cơ cấu xã hội - giai cấp mới hiện đại hơn",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, sự xuất hiện của tầng lớp doanh nhân, tiểu chủ phản ánh điều gì?",
                    options: [
                        "Sự tồn tại của xã hội cũ kéo dài",
                        "Tác động của kinh tế thị trường định hướng xã hội chủ nghĩa",
                        "Mâu thuẫn giữa các tầng lớp ngày càng gay gắt",
                        "Sự hình thành các tầng lớp xã hội mới trong quá trình phát triển",
                    ],
                    correctAnswer:
                        "Sự hình thành các tầng lớp xã hội mới trong quá trình phát triển",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mối quan hệ giữa các giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội diễn ra theo xu hướng nào?",
                    options: [
                        "Cạnh tranh và đối kháng gay gắt",
                        "Phân hóa và tách biệt rõ ràng",
                        "Xung đột ngày càng tăng",
                        "Vừa đấu tranh, vừa liên minh, tiến tới xích lại gần nhau",
                    ],
                    correctAnswer:
                        "Vừa đấu tranh, vừa liên minh, tiến tới xích lại gần nhau",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Giai cấp nào giữ vai trò chủ đạo, tiên phong trong quá trình cải tạo xã hội cũ và xây dựng xã hội mới?",
                    options: [
                        "Giai cấp nông dân",
                        "Tầng lớp trí thức",
                        "Giai cấp tư sản dân tộc",
                        "Giai cấp công nhân",
                    ],
                    correctAnswer: "Giai cấp công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Liên minh giữa giai cấp công nhân, nông dân và trí thức trong thời kỳ quá độ có ý nghĩa gì?",
                    options: [
                        "Là mục tiêu lâu dài của cách mạng xã hội chủ nghĩa",
                        "Là cơ sở kinh tế cho phát triển bền vững",
                        "Là phương tiện phát triển sản xuất tư nhân",
                        "Là nền tảng chính trị - xã hội của nhà nước xã hội chủ nghĩa",
                    ],
                    correctAnswer:
                        "Là nền tảng chính trị - xã hội của nhà nước xã hội chủ nghĩa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo C.Mác và Ph.Ăngghen, nguyên nhân chủ yếu khiến nhiều cuộc đấu tranh của giai cấp công nhân ở Anh và Pháp giữa thế kỷ XIX thất bại là do",
                    options: [
                        "Thiếu sự lãnh đạo của Đảng Cộng sản",
                        "Thiếu công cụ tuyên truyền và tổ chức cách mạng",
                        "Giai cấp công nhân không liên minh với giai cấp nông dân",
                        "Do sự can thiệp của giai cấp tư sản",
                    ],
                    correctAnswer:
                        "Giai cấp công nhân không liên minh với giai cấp nông dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo quan điểm của C.Mác và Ph.Ăngghen, “người bạn đồng minh tự nhiên” của giai cấp công nhân là",
                    options: [
                        "Tầng lớp tiểu tư sản",
                        "Trí thức",
                        "Tư sản dân tộc",
                        "Giai cấp nông dân",
                    ],
                    correctAnswer: "Giai cấp nông dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "V.I.Lênin khẳng định nguyên tắc cao nhất của chuyên chính vô sản là",
                    options: [
                        "Kiểm soát nền kinh tế tư nhân",
                        "Xóa bỏ hoàn toàn tầng lớp tiểu tư sản",
                        "Tăng cường đấu tranh chống lại nông dân",
                        "Duy trì khối liên minh giữa giai cấp vô sản và giai cấp nông dân",
                    ],
                    correctAnswer:
                        "Duy trì khối liên minh giữa giai cấp vô sản và giai cấp nông dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I.Lênin, chuyên chính vô sản là hình thức đặc biệt của liên minh giữa",
                    options: [
                        "Tư sản dân tộc và công nhân",
                        "Giai cấp vô sản với các tầng lớp lao động khác không phải vô sản",
                        "Tiểu tư sản và tư sản",
                        "Nông dân và địa chủ",
                    ],
                    correctAnswer:
                        "Giai cấp vô sản với các tầng lớp lao động khác không phải vô sản",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, khối liên minh công - nông - trí thức có vai trò",
                    options: [
                        "Là lực lượng đối kháng với nhà nước tư sản",
                        "Chỉ hỗ trợ trong giai đoạn giành chính quyền",
                        "Mang tính tạm thời trong đấu tranh cách mạng",
                        "Là lực lượng sản xuất và chính trị - xã hội cơ bản, đảm bảo xây dựng CNXH",
                    ],
                    correctAnswer:
                        "Là lực lượng sản xuất và chính trị - xã hội cơ bản, đảm bảo xây dựng CNXH",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I.Lênin, trí thức có vai trò như thế nào trong khối liên minh công - nông - trí?",
                    options: [
                        "Là lực lượng trung gian không cần thiết",
                        "Là nhóm tách biệt khỏi liên minh",
                        "Là tầng lớp cần kiềm chế để tránh xung đột",
                        "Là lực lượng quan trọng góp phần củng cố liên minh",
                    ],
                    correctAnswer:
                        "Là lực lượng quan trọng góp phần củng cố liên minh",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Xét về kinh tế, liên minh công - nông - trí thức hình thành do yêu cầu khách quan của quá trình",
                    options: [
                        "Mở rộng thị trường xuất khẩu",
                        "Giảm phụ thuộc vào nông nghiệp",
                        "Đẩy mạnh công nghiệp hóa, hiện đại hóa",
                        "Hội nhập quốc tế",
                    ],
                    correctAnswer: "Đẩy mạnh công nghiệp hóa, hiện đại hóa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mục tiêu cuối cùng của khối liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH là",
                    options: [
                        "Cạnh tranh công bằng giữa các giai cấp",
                        "Bảo vệ lợi ích riêng của từng tầng lớp",
                        "Duy trì sự phân hóa giai cấp",
                        "Thực hiện thắng lợi mục tiêu của chủ nghĩa xã hội",
                    ],
                    correctAnswer:
                        "Thực hiện thắng lợi mục tiêu của chủ nghĩa xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo nội dung trên, sự phát triển của cơ cấu kinh tế quốc dân thống nhất có tác dụng",
                    options: [
                        "Làm giảm vai trò của nông dân",
                        "Tạo ra mâu thuẫn mới giữa các giai cấp",
                        "Thúc đẩy tư nhân hóa kinh tế",
                        "Tăng cường khối liên minh công - nông - trí thức",
                    ],
                    correctAnswer:
                        "Tăng cường khối liên minh công - nông - trí thức",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Để duy trì khối liên minh bền vững giữa công nhân, nông dân và trí thức cần",
                    options: [
                        "Giảm quyền lợi của công nhân",
                        "Tách biệt các nhóm lợi ích kinh tế",
                        "Để mâu thuẫn tự phát triển tự nhiên",
                        "Phát hiện và giải quyết kịp thời mâu thuẫn lợi ích giữa các tầng lớp",
                    ],
                    correctAnswer:
                        "Phát hiện và giải quyết kịp thời mâu thuẫn lợi ích giữa các tầng lớp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, cơ cấu xã hội - giai cấp biến đổi chủ yếu do yếu tố nào chi phối?",
                    options: [
                        "Sự thay đổi về chính trị và tư tưởng",
                        "Sự phát triển của văn hóa và giáo dục",
                        "Sự biến đổi trong cơ cấu kinh tế",
                        "Sự mở rộng hợp tác quốc tế",
                    ],
                    correctAnswer: "Sự biến đổi trong cơ cấu kinh tế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Giai cấp nào giữ vai trò lãnh đạo cách mạng thông qua đội tiên phong là Đảng Cộng sản Việt Nam?",
                    options: [
                        "Giai cấp nông dân",
                        "Đội ngũ trí thức",
                        "Tầng lớp doanh nhân",
                        "Giai cấp công nhân",
                    ],
                    correctAnswer: "Giai cấp công nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong thời kỳ quá độ lên chủ nghĩa xã hội, bộ phận công nhân nào được xem là biểu hiện của xu hướng phát triển mới?",
                    options: [
                        "Công nhân thủ công truyền thống",
                        "Công nhân dịch vụ phi sản xuất",
                        "Công nhân nông nghiệp",
                        "Công nhân hiện đại, công nhân tri thức",
                    ],
                    correctAnswer: "Công nhân hiện đại, công nhân tri thức",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong cơ cấu xã hội - giai cấp, tầng lớp nào có vai trò quan trọng trong công nghiệp hóa, hiện đại hóa nông nghiệp và xây dựng nông thôn mới?",
                    options: [
                        "Giai cấp nông dân",
                        "Đội ngũ trí thức",
                        "Doanh nhân trẻ",
                        "Giai cấp công nhân",
                    ],
                    correctAnswer: "Giai cấp nông dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo nội dung văn bản, đội ngũ trí thức có vai trò đặc biệt trong việc nào sau đây?",
                    options: [
                        "Quản lý hệ thống sản xuất nông nghiệp",
                        "Phát triển du lịch và văn hóa",
                        "Giữ gìn trật tự xã hội",
                        "Nâng cao trí tuệ dân tộc và phát triển kinh tế tri thức",
                    ],
                    correctAnswer:
                        "Nâng cao trí tuệ dân tộc và phát triển kinh tế tri thức",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đội ngũ doanh nhân ở Việt Nam hiện nay được xem là lực lượng có vai trò gì?",
                    options: [
                        "Lực lượng chính trị trung tâm của Đảng",
                        "Nhóm đối tượng cần hỗ trợ phúc lợi",
                        "Lực lượng tham gia trực tiếp vào giáo dục đại học",
                        "Đóng góp tích cực cho phát triển kinh tế - xã hội và giải quyết việc làm",
                    ],
                    correctAnswer:
                        "Đóng góp tích cực cho phát triển kinh tế - xã hội và giải quyết việc làm",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo văn bản, phụ nữ trong thời kỳ quá độ lên chủ nghĩa xã hội có vai trò chủ yếu là gì?",
                    options: [
                        "Tham gia chính trị, giữ chức vụ lãnh đạo cấp cao",
                        "Lãnh đạo các tổ chức công đoàn",
                        "Thực hiện chính sách đối ngoại",
                        "Lực lượng lao động quan trọng, đóng góp cho phát triển x6� hội",
                    ],
                    correctAnswer:
                        "Lực lượng lao động quan trọng, đóng góp cho phát triển xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Liên minh giai cấp công nhân - nông dân - trí thức được Đảng ta xác định là nền tảng của điều gì?",
                    options: [
                        "Chính sách an sinh xã hội",
                        "Hệ thống pháp luật Việt Nam",
                        "Chính sách kinh tế vĩ mô",
                        "Khối đại đoàn kết toàn dân tộc",
                    ],
                    correctAnswer: "Khối đại đoàn kết toàn dân tộc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nội dung kinh tế của liên minh giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội có ý nghĩa như thế nào?",
                    options: [
                        "Là nội dung bổ sung về chính trị",
                        "Là yếu tố hình thức của sự hợp tác",
                        "Là nhiệm vụ phụ trong công cuộc đổi mới",
                        "Là cơ sở vật chất – kỹ thuật quyết định nhất của liên minh",
                    ],
                    correctAnswer:
                        "Là cơ sở vật chất – kỹ thuật quyết định nhất của liên minh",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong các phương hướng cơ bản để xây dựng cơ cấu xã hội - giai cấp theo hướng tích cực là gì?",
                    options: [
                        "Đẩy mạnh hợp tác quốc tế về giáo dục",
                        "Cải thiện phúc lợi xã hội trong khu vực đô thị",
                        "Tăng cường tuyên truyền tư tưởng Hồ Chí Minh",
                        "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với công bằng xã hội",
                    ],
                    correctAnswer:
                        "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với công bằng xã hội",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Cơ cấu xã hội - giai cấp",
                            definition:
                                "Hệ thống các giai cấp, tầng lớp tồn tại khách quan trong một chế độ xã hội.",
                        },
                        {
                            term: "Liên minh công - nông - trí",
                            definition:
                                "Nền tảng của nhà nước XHCN, động lực của cách mạng.",
                        },
                        {
                            term: "Giai cấp công nhân",
                            definition:
                                "Giai cấp giữ vai trò lãnh đạo cách mạng trong thời kỳ quá độ.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các yếu tố cơ bản của cơ cấu xã hội với nội dung tương ứng.",
                    pairs: [
                        {
                            term: "Cơ cấu giai cấp - tầng lớp",
                            definition:
                                "Dựa trên quan hệ sở hữu tư liệu sản xuất và vai trò trong sản xuất.",
                        },
                        {
                            term: "Cơ cấu dân tộc",
                            definition:
                                "Thể hiện sự đa dạng về nguồn gốc, văn hóa và ngôn ngữ.",
                        },
                        {
                            term: "Cơ cấu nghề nghiệp",
                            definition:
                                "Phân chia lao động xã hội theo các ngành, lĩnh vực.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các đặc điểm của cơ cấu xã hội trong thời kỳ quá độ với biểu hiện cụ thể.",
                    pairs: [
                        {
                            term: "Tính phức tạp",
                            definition:
                                "Tồn tại nhiều giai cấp, tầng lớp đan xen nhau.",
                        },
                        {
                            term: "Tính vận động",
                            definition:
                                "Cơ cấu xã hội biến đổi theo hướng tiến bộ.",
                        },
                        {
                            term: "Tính thống nhất",
                            definition:
                                "Các giai cấp cùng hướng tới mục tiêu xây dựng CNXH.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối cơ sở hình thành liên minh giai cấp với nội dung.",
                    pairs: [
                        {
                            term: "Cơ sở kinh tế",
                            definition:
                                "Yêu cầu phát triển lực lượng sản xuất và quan hệ sản xuất mới.",
                        },
                        {
                            term: "Cơ sở chính trị",
                            definition:
                                "Cần đoàn kết để giữ vững chính quyền và bảo vệ Tổ quốc.",
                        },
                        {
                            term: "Cơ sở tư tưởng",
                            definition:
                                "Cùng hướng tới lý tưởng xã hội công bằng, văn minh.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối nội dung liên minh công - nông - trí với lĩnh vực thực hiện.",
                    pairs: [
                        {
                            term: "Liên minh về kinh tế",
                            definition:
                                "Hợp tác trong sản xuất, phân phối, phát triển chung.",
                        },
                        {
                            term: "Liên minh về chính trị",
                            definition:
                                "Thống nhất dưới sự lãnh đạo của Đảng, xây dựng nhà nước XHCN.",
                        },
                        {
                            term: "Liên minh về văn hóa - xã hội",
                            definition:
                                "Hỗ trợ trong giáo dục, nâng cao dân trí, xây dựng đời sống mới.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối vai trò của các giai cấp, tầng lớp với đặc điểm cụ thể.",
                    pairs: [
                        {
                            term: "Giai cấp công nhân",
                            definition:
                                "Lực lượng lãnh đạo, đại diện cho lực lượng sản xuất tiên tiến.",
                        },
                        {
                            term: "Giai cấp nông dân",
                            definition:
                                "Lực lượng đồng minh chiến lược, đông đảo nhất.",
                        },
                        {
                            term: "Tầng lớp trí thức",
                            definition:
                                "Lực lượng quan trọng trong phát triển khoa học, công nghệ và giáo dục.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-6",
            title: "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH",
            sections: [
                {
                    id: "6-1",
                    chapterTitle:
                        "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH",
                    title: "6.1. Vấn đề dân tộc: Khái niệm và quan điểm của CNML",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        { type: "paragraph", text: "1.1. Khái niệm dân tộc" },
                        {
                            type: "list",
                            items: [
                                "Dân tộc là một cộng đồng người ổn định, được hình thành trong lịch sử, có: Chung lãnh thổ, Chung ngôn ngữ, Chung đời sống kinh tế, Chung truyền thống văn hóa và tâm lý dân tộc.",
                                "Trong thời đại ngày nay, vấn đề dân tộc gắn liền với độc lập dân tộc và quyền tự quyết.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Khái niệm Dân tộc._1762452543568.jpg",
                            caption: "Sơ đồ Khái niệm Dân tộc.",
                        },
                        {
                            type: "paragraph",
                            text: "1.2. Quan điểm của chủ nghĩa Mác – Lênin về vấn đề dân tộc",
                        },
                        {
                            type: "list",
                            items: [
                                "Các dân tộc hoàn toàn bình đẳng – không dân tộc nào được đặc quyền, đặc lợi.",
                                "Các dân tộc có quyền tự quyết – tự lựa chọn con đường phát triển, kể cả quyền tách ra hoặc liên hiệp.",
                                "Liên hiệp công nhân các dân tộc – đoàn kết giai cấp công nhân toàn thế giới chống chủ nghĩa đế quốc, xây dựng CNXH.",
                            ],
                        },
                        {
                            type: "paragraph",
                            text: "→ Đây là ba nguyên tắc cơ bản của chính sách dân tộc XHCN.",
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Quan điểm Mác - Lênin về Dân tộc._1762452543568.jpg",
                            caption: "Sơ đồ Quan điểm Mác - Lênin về Dân tộc.",
                        },
                    ],
                },
                {
                    id: "6-2",
                    chapterTitle:
                        "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH trong thời kỳ quá độ lên CNXH",
                    title: "6.2. Giải quyết vấn đề dân tộc và thực tiễn ở Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "1.3. Giải quyết vấn đề dân tộc theo quan điểm CNXHKH",
                        },
                        {
                            type: "list",
                            items: [
                                "Kết hợp chặt chẽ giữa giải phóng dân tộc và giải phóng giai cấp.",
                                "Thực hiện bình đẳng – đoàn kết – tương trợ – phát triển giữa các dân tộc.",
                                "Xóa bỏ bất bình đẳng, kỳ thị dân tộc, củng cố khối đại đoàn kết toàn dân.",
                                "Tôn trọng bản sắc văn hóa và ngôn ngữ dân tộc thiểu số, tạo điều kiện phát triển đồng đều.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Giải quyết vấn đề dân tộc (CNXHKH)._1762452543566.jpg",
                            caption:
                                "Sơ đồ Giải quyết vấn đề dân tộc (CNXHKH).",
                        },
                        {
                            type: "paragraph",
                            text: "1.4. Vấn đề dân tộc ở Việt Nam",
                        },
                        {
                            type: "list",
                            items: [
                                "Việt Nam là quốc gia đa dân tộc (54 dân tộc anh em), cùng sinh sống hòa hợp, đoàn kết.",
                                "Chính sách dân tộc của Đảng và Nhà nước: 1. Bình đẳng – đoàn kết – tôn trọng – giúp nhau cùng phát triển. 2. Phát triển vùng dân tộc thiểu số, ưu tiên đầu tư kinh tế – xã hội. 3. Giữ gìn, phát huy bản sắc văn hóa dân tộc. 4. Đào tạo, sử dụng cán bộ người dân tộc thiểu số.",
                                "Mục tiêu: Xây dựng khối đại đoàn kết dân tộc vững chắc, tạo sức mạnh cho công cuộc xây dựng CNXH.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ chính sách Dân tộc ở Việt Nam._1762452543565.jpg",
                            caption: "Sơ đồ chính sách Dân tộc ở Việt Nam.",
                        },
                    ],
                },
                {
                    id: "6-3",
                    chapterTitle:
                        "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH",
                    title: "6.3. Vấn đề tôn giáo: Bản chất và quan điểm của CNML",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "2.1. Bản chất và nguồn gốc của tôn giáo",
                        },
                        {
                            type: "list",
                            items: [
                                "Tôn giáo là hình thái ý thức xã hội phản ánh hư ảo hiện thực, có ba nguồn gốc cơ bản: 1. Tự nhiên (Con người bất lực trước thiên nhiên → sùng bái thần linh), 2. Xã hội (Áp bức, bất công giai cấp → tìm niềm tin nơi thế giới bên kia), 3. Nhận thức (Trình độ hiểu biết hạn chế → lý giải thế giới bằng tín ngưỡng).",
                                "Trong thời kỳ CNXH, tôn giáo vẫn tồn tại lâu dài do những nguyên nhân lịch sử, văn hóa, tâm lý.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Tôn giáo – Bản chất & Nguồn gốc._1762452543566.jpg",
                            caption: "Sơ đồ Tôn giáo – Bản chất & Nguồn gốc.",
                        },
                        {
                            type: "paragraph",
                            text: "2.2. Quan điểm của chủ nghĩa Mác – Lênin về tôn giáo",
                        },
                        {
                            type: "list",
                            items: [
                                "Tôn giáo là sản phẩm của xã hội có giai cấp, và sẽ mất đi khi xã hội không còn áp bức, bất công.",
                                "CNXH không thủ tiêu bằng mệnh lệnh, mà tôn trọng, cải tạo dần dần bằng nâng cao đời sống vật chất – tinh thần của nhân dân.",
                                "Tự do tín ngưỡng và không tín ngưỡng là quyền cơ bản của con người.",
                                "Đoàn kết người có đạo và người không có đạo, cùng hướng tới mục tiêu xây dựng CNXH.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Quan điểm Mác - Lênin về Tôn giáo._1762452543568.jpg",
                            caption: "Sơ đồ Quan điểm Mác - Lênin về Tôn giáo.",
                        },
                    ],
                },
                {
                    id: "6-4",
                    chapterTitle:
                        "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH",
                    title: "6.4. Chính sách tôn giáo ở Việt Nam",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "image",
                            url: "images/Đại hội I GHPGVN (1981, Quán Sứ) – Mốc thời kỳ quá độ thống nhất giáo hội (Phật giáo) sau 1975._1762452543566.jpg",
                            caption:
                                "Đại hội I GHPGVN (1981, Quán Sứ) – Mốc thời kỳ quá độ: thống nhất giáo hội (Phật giáo) sau 1975.",
                        },
                        {
                            type: "paragraph",
                            text: "2.3. Chính sách tôn giáo của Đảng và Nhà nước Việt Nam",
                        },
                        {
                            type: "list",
                            items: [
                                "1. Tôn trọng quyền tự do tín ngưỡng, tôn giáo và quyền không tín ngưỡng.",
                                "2. Các tôn giáo bình đẳng trước pháp luật, hoạt động trong khuôn khổ Hiến pháp và pháp luật.",
                                "3. Phát huy giá trị đạo đức, nhân văn tích cực của tôn giáo; đồng thời đấu tranh với các hoạt động lợi dụng tôn giáo để chia rẽ khối đại đoàn kết dân tộc.",
                                "4. Xây dựng khối đoàn kết toàn dân tộc – đoàn kết tôn giáo trong công cuộc CNH – HĐH đất nước.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Chính sách Tôn giáo ở Việt Nam._1762452543567.jpg",
                            caption: "Sơ đồ Chính sách Tôn giáo ở Việt Nam.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/Ue2AyXBPUbU",
                            caption:
                                "Việt Nam luôn đảm bảo tự do tín ngưỡng, tôn giáo | VTV4",
                        },
                        {
                            type: "paragraph",
                            text: "2.4. Vai trò tích cực của tôn giáo trong xã hội hiện nay",
                        },
                        {
                            type: "list",
                            items: [
                                "Góp phần ổn định xã hội, đoàn kết cộng đồng.",
                                "Khuyến khích đạo đức, nhân ái, bác ái.",
                                "Tham gia hoạt động xã hội, nhân đạo, giáo dục, y tế.",
                            ],
                        },
                        {
                            type: "paragraph",
                            text: "→ Tôn giáo là một bộ phận của đời sống tinh thần dân tộc, cần được hướng dẫn, phát huy theo hướng tích cực.",
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Vai trò tích cực của Tôn giáo._1762452543568.jpg",
                            caption: "Sơ đồ Vai trò tích cực của Tôn giáo.",
                        },
                        {
                            type: "image",
                            url: "images/Nhà thờ chính tòa Đức Bà Sài Gòn vào dịp Giáng sin_1762452543566.jpg",
                            caption:
                                "Nhà thờ chính tòa Đức Bà Sài Gòn vào dịp Giáng sinh.",
                        },
                        {
                            type: "image",
                            url: "images/Phật đản Vesek 2025._1762452543567.jpg",
                            caption: "Phật đản Vesek 2025.",
                        },
                        {
                            type: "image",
                            url: "images/Nhà thờ Giáo xứ Hàm Long vào dịp Giáng sinh._1762452543567.jpg",
                            caption:
                                "Nhà thờ Giáo xứ Hàm Long vào dịp Giáng sinh.",
                        },
                        {
                            type: "image",
                            url: "images/Nhà thờ Thái Bình vào dịp Giáng sinh._1762452543567.jpg",
                            caption: "Nhà thờ Thái Bình vào dịp Giáng sinh.",
                        },
                    ],
                },
                {
                    id: "6-5",
                    chapterTitle:
                        "Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH",
                    title: "6.5. Mối quan hệ dân tộc - tôn giáo và ý nghĩa",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "3. Mối quan hệ giữa dân tộc và tôn giáo",
                        },
                        {
                            type: "list",
                            items: [
                                "Hai vấn đề có quan hệ mật thiết: Nhiều dân tộc có tôn giáo riêng; Vấn đề dân tộc thường gắn với niềm tin, phong tục, tập quán tôn giáo.",
                                "→ Giải quyết phải đồng thời và hài hòa, trên cơ sở đại đoàn kết dân tộc – tôn giáo.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Quan hệ Dân tộc - Tôn giáo._1762452543568.jpg",
                            caption: "Sơ đồ Quan hệ Dân tộc - Tôn giáo.",
                        },
                        { type: "paragraph", text: "4. Ý nghĩa" },
                        {
                            type: "list",
                            items: [
                                "Là vấn đề chiến lược trong sự nghiệp cách mạng XHCN.",
                                "Bảo đảm ổn định chính trị, đoàn kết xã hội, tạo điều kiện cho phát triển bền vững đất nước.",
                                "Khẳng định đường lối đúng đắn của Đảng Cộng sản Việt Nam: “Đoàn kết dân tộc – tôn giáo là sức mạnh to lớn của cách mạng Việt Nam.”",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Ý nghĩa của vấn đề dân tộc và tôn giáo._1762452543568.jpg",
                            caption:
                                "Sơ đồ Ý nghĩa của vấn đề dân tộc và tôn giáo.",
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Theo chủ nghĩa Mác – Lênin, đặc trưng quan trọng nhất của dân tộc (nation) là gì?",
                    options: [
                        "Có ngôn ngữ chung trong xã hội",
                        "Có lãnh thổ chung ổn định",
                        "Có nhà nước quản lý thống nhất",
                        "Có chung phương thức sinh hoạt kinh tế",
                    ],
                    correctAnswer: "Có chung phương thức sinh hoạt kinh tế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Tiêu chí quan trọng nhất để phân định một tộc người (ethnies) là gì?",
                    options: [
                        "Cộng đồng về văn hóa",
                        "Cộng đồng về ngôn ngữ",
                        "Cộng đồng về lãnh thổ",
                        "Ý thức tự giác tộc người",
                    ],
                    correctAnswer: "Ý thức tự giác tộc người",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I.Lênin, hai xu hướng khách quan trong sự phát triển quan hệ dân tộc là gì?",
                    options: [
                        "Tách ra để hình thành dân tộc độc lập và hội nhập toàn cầu",
                        "Tách ra để hình thành dân tộc độc lập và liên hiệp các dân tộc",
                        "Phát triển kinh tế độc lập và hợp tác quốc tế",
                        "Phát triển văn hóa riêng và bảo tồn truyền thống",
                    ],
                    correctAnswer:
                        "Tách ra để hình thành dân tộc độc lập và liên hiệp các dân tộc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nội dung “Các dân tộc hoàn toàn bình đẳng” trong Cương lĩnh dân tộc của Lênin thể hiện điều gì?",
                    options: [
                        "Mọi dân tộc đều có quyền tự trị về văn hóa",
                        "Các dân tộc đều có quyền lợi ngang nhau về kinh tế, chính trị, văn hóa",
                        "Mỗi dân tộc có quyền tách ra thành quốc gia riêng",
                        "Không dân tộc nào được giữ đặc quyền, đặc lợi",
                    ],
                    correctAnswer:
                        "Không dân tộc nào được giữ đặc quyền, đặc lợi",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quyền dân tộc tự quyết theo chủ nghĩa Mác – Lênin bao gồm nội dung nào sau đây?",
                    options: [
                        "Tự do giao thương với các dân tộc khác",
                        "Quyền lựa chọn hình thức tôn giáo",
                        "Quyền tự chọn chế độ chính trị và con đường phát triển",
                        "Quyền kiểm soát tài nguyên thiên nhiên",
                    ],
                    correctAnswer:
                        "Quyền tự chọn chế độ chính trị và con đường phát triển",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đặc điểm nổi bật nhất của các dân tộc ở Việt Nam về mặt cư trú là gì?",
                    options: [
                        "Cư trú tập trung thành từng khu vực riêng",
                        "Cư trú phân tán theo vùng tự trị",
                        "Cư trú dọc các vùng đồng bằng ven biển",
                        "Cư trú xen kẽ nhau trên khắp lãnh thổ",
                    ],
                    correctAnswer: "Cư trú xen kẽ nhau trên khắp lãnh thổ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Ở Việt Nam, các dân tộc thiểu số chủ yếu sinh sống ở đâu?",
                    options: [
                        "Vùng đồng bằng và đô thị lớn",
                        "Các khu công nghiệp và trung tâm hành chính",
                        "Các vùng giáp biển và trung tâm thương mại",
                        "Các vùng biên giới, hải đảo, vùng sâu vùng xa",
                    ],
                    correctAnswer:
                        "Các vv�ng biên giới, hải đảo, vùng sâu vùng xa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nguyên nhân hình thành truyền thống đoàn kết dân tộc ở Việt Nam là gì?",
                    options: [
                        "Do sự phát triển kinh tế thị trường",
                        "Do ảnh hưởng của văn hóa phương Đông",
                        "Do nhu cầu hợp sức trong đấu tranh chống ngoại xâm và cải biến tự nhiên",
                        "Do chính sách đồng hóa của nhà nước phong kiến",
                    ],
                    correctAnswer:
                        "Do nhu cầu hợp sức trong đấu tranh chống ngoại xâm và cải biến tự nhiên",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những giải pháp quan trọng để thực hiện bình đẳng dân tộc ở Việt Nam là gì?",
                    options: [
                        "Giảm dần khoảng cách phát triển giữa các dân tộc",
                        "Tăng quyền tự trị cho dân tộc thiểu số",
                        "Xây dựng hệ thống giáo dục riêng cho từng dân tộc",
                        "Tách biệt khu vực sinh sống của dân tộc đa số và thiểu số",
                    ],
                    correctAnswer:
                        "Giảm dần khoảng cách phát triển giữa các dân tộc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Đảng và Nhà nước Việt Nam, vấn đề dân tộc có ý nghĩa như thế nào?",
                    options: [
                        "Là vấn đề nhân khẩu học",
                        "Là vấn đề pháp lý mang tính địa phương",
                        "Là vấn đề kinh tế đơn thuần",
                        "Là vấn đề chính trị - xã hội rộng lớn và toàn diện",
                    ],
                    correctAnswer:
                        "Là vấn đề chính trị - xã hội rộng lớn và toàn diện",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo chủ nghĩa Mác - Lênin, bản chất của tôn giáo là gì?",
                    options: [
                        "Là sản phẩm của ý chí thần linh chi phối con người",
                        "Là hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan",
                        "Là hiện tượng tự nhiên hình thành trong quá trình tiến hóa",
                        "Là niềm tin tuyệt đối vào thế giới siêu nhiên",
                    ],
                    correctAnswer:
                        "Là hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan",
                },
                {
                    type: "multiple-choice",
                    question: "Theo Ph.Ăngghen, tôn giáo phản ánh điều gì?",
                    options: [
                        "Bản chất sáng tạo của con người",
                        "Các giá trị đạo đức trong xã hội",
                        "Những khát vọng tự do của con người",
                        "Những lực lượng trần thế được phản ánh thành lực lượng siêu trần thế",
                    ],
                    correctAnswer:
                        "Những lực lượng trần thế được phản ánh thành lực lượng siêu trần thế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nguồn gốc tự nhiên của tôn giáo bắt nguồn từ đâu?",
                    options: [
                        "Từ sự phát triển của văn hóa tinh thần",
                        "Từ niềm tin vào thế giới sau khi chết",
                        "Từ sự giao tiếp giữa các bộ lạc nguyên thủy",
                        "Từ sự bất lực của con người trước thiên nhiên",
                    ],
                    correctAnswer:
                        "Từ sự bất lực của con người trước thiên nhiên",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo chủ nghĩa Mác - Lênin, yếu tố nào quyết định sự tồn tại và phát triển của tôn giáo?",
                    options: [
                        "Hệ tư tưởng của giai cấp thống trị",
                        "Sản xuất vật chất và quan hệ kinh tế",
                        "Các giá trị nhân văn trong xã hội",
                        "Hoạt động tuyên truyền của các giáo hội",
                    ],
                    correctAnswer: "Sản xuất vật chất và quan hệ kinh tế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Tính lịch sử của tôn giáo thể hiện ở điểm nào sau đây?",
                    options: [
                        "Tôn giáo hình thành, tồn tại, phát triển và biến đổi theo thời kỳ lịch sc��",
                        "Tôn giáo chỉ phát triển khi có chiến tranh",
                        "Tôn giáo chỉ tồn tại trong xã hội có giai cấp",
                        "Tôn giáo luôn bất biến và tồn tại mãi mãi",
                    ],
                    correctAnswer:
                        "Tôn giáo hình thành, tồn tại, phát triển và biến đổi theo thời kỳ lịch sử",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Tính quần chúng của tôn giáo thể hiện ở chỗ nào?",
                    options: [
                        "Tôn giáo chỉ dành cho tầng lớp trí thức",
                        "Tôn giáo chỉ tồn tại trong một số quốc gia nhất định",
                        "Tôn giáo chỉ ảnh hưởng trong lĩnh vực chính trị",
                        "Tôn giáo có tín đồ đông đảo, là nhu cầu tinh thần phổ biến của nhân dân",
                    ],
                    correctAnswer:
                        "Tôn giáo có tín đồ đông đảo, là nhu cầu tinh thần phổ biến của nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong xã hội có giai cấp, tính chính trị của tôn giáo xuất hiện khi nào?",
                    options: [
                        "Khi tôn giáo phản ánh nhận thức hồn nhiên của con người",
                        "Khi tôn giáo chỉ là niềm tin thuần túy",
                        "Khi tôn giáo phản ánh và phục vụ lợi ích của các giai cấp",
                        "Khi tôn giáo được dùng để thống nhất xã hội",
                    ],
                    correctAnswer:
                        "Khi tôn giáo phản ánh và phục vụ lợi ích của các giai cấp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Nguyên tắc cơ bản trong giải quyết vấn đề tôn giáo ở nước ta là gì?",
                    options: [
                        "Nhà nước quản lý và điều hành trực tiếp các tôn giáo",
                        "Chỉ cho phép các tôn giáo nội sinh được hoạt động",
                        "Ưu tiên phát triển tôn giáo có đông tín đồ nhất",
                        "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, không tín ngưỡng của nhân dân",
                    ],
                    correctAnswer:
                        "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, không tín ngưỡng của nhân dân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Khi giải quyết vấn đề tôn giáo, chủ nghĩa Mác - Lênin nhấn mạnh điều gì?",
                    options: [
                        "Phải xoá bỏ hoàn toàn mọi tôn giáo",
                        "Phải kiểm soát chặt chẽ các hoạt động tôn giáo",
                        "Phải tách biệt tôn giáo ra khỏi xã hội",
                        "Phải khắc phục dần ảnh hưởng tiêu cực của tôn giáo gắn với cải tạo xã hội cũ và xây dựng xã hội mới",
                    ],
                    correctAnswer:
                        "Phải khắc phục dần ảnh hưởng tiêu cực của tôn giáo gắn với cải tạo xã hội cũ và xây dựng xã hội mới",
                },
                {
                    type: "multiple-choice",
                    question: "Việt Nam có đặc điểm nổi bật nào về tôn giáo?",
                    options: [
                        "Có một tôn giáo duy nhất được thừa nhận",
                        "Thường xuyên xảy ra xung đột tôn giáo",
                        "Chỉ có các tôn giáo du nhập từ bên ngoài",
                        "Có nhiều tôn giáo, đa dạng, chung sống hòa bình và không có chiến tranh tôn giáo",
                    ],
                    correctAnswer:
                        "Có nhiều tôn giáo, đa dạng, chung sống hòa bình và không có chiến tranh tôn giáo",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quan hệ dân tộc và tôn giáo ở Việt Nam được thiết lập và củng cố trên cơ sở nào?",
                    options: [
                        "Truyền thống tín ngưỡng dân gian",
                        "Cộng đồng quốc gia – dân tộc thống nhất",
                        "Sự đa dạng của các tôn giáo ngoại sinh",
                        "Tư tưởng nhân quyền hiện đại",
                    ],
                    correctAnswer: "Cộng đồng quốc gia – dân tộc thống nhất",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong lịch sử, các tôn giáo ở Việt Nam có đặc điểm gì nổi bật?",
                    options: [
                        "Gắn bó chặt chẽ và đồng hành cùng dân tộc",
                        "Thường xuyên mâu thuẫn với tín ngưỡng truyền thống",
                        "Hình thành tách biệt khỏi dân tộc",
                        "Chịu ảnh hưởng hoàn toàn từ phương Tây",
                    ],
                    correctAnswer: "Gắn bó chặt chẽ và đồng hành cùng dân tộc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Tín ngưỡng truyền thống ở Việt Nam có ý nghĩa gì trong đời sống tinh thần?",
                    options: [
                        "Là yếu tố mang tính địa phương, không phổ biến",
                        "Chỉ tồn tại trong các cộng đồng tôn giáo nhỏ",
                        "Là nét đẹp văn hóa, gắn kết cộng đồng dân tộc",
                        "Không còn ảnh hưởng trong xã hội hiện đại",
                    ],
                    correctAnswer:
                        "Là nét đẹp văn hóa, gắn kết cộng đồng dân tộc",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Thờ cúng tổ tiên ở Việt Nam thể hiện rõ nhất ở cấp độ nào?",
                    options: [
                        "Cấp độ gia đình, dòng họ",
                        "Cấp độ quốc tế",
                        "Cấp độ nhà nước",
                        "Cấp độ tôn giáo chính thức",
                    ],
                    correctAnswer: "Cấp độ gia đình, dòng họ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Các tôn giáo du nhập vào Việt Nam như Nho giáo, Phật giáo, Công giáo có đặc điểm gì khi phát triển ở Việt Nam?",
                    options: [
                        "Giữ nguyên bản gốc từ nơi xuất phát",
                        "Bị bài trừ do khác biệt văn hóa",
                        "Biến đổi để phù hợp với văn hóa và tín ngưỡng Việt Nam",
                        "Chỉ phát triển ở vùng dân tộc thiểu số",
                    ],
                    correctAnswer:
                        "Biến đổi để phù hợp với văn hóa và tín ngưỡng Việt Nam",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một số hiện tượng tôn giáo mới như Long Hoa Di Lặc, Thanh Hải Vô Thượng Sư có điểm chung là gì?",
                    options: [
                        "Phát triển dựa trên tín ngưỡng dân gian",
                        "Mang tính mê tín, gây ảnh hưởng tiêu cực đến xã hội",
                        "Được Nhà nước khuyến khích phát triển",
                        "Có nguồn gốc từ các tôn giáo truyền thống",
                    ],
                    correctAnswer:
                        "Mang tính mê tín, gây ảnh hưởng tiêu cực đến xã hội",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Các thế lực thù địch thường lợi dụng vấn đề dân tộc và tôn giáo ở những khu vực nào?",
                    options: [
                        "Đồng bằng Bắc Bộ và Đông Nam Bộ",
                        "Tây Bắc, Tây Nguyên, Tây Nam Bộ và Tây Duyên hải miền Trung",
                        "Trung du Bắc Bộ và Tây Nam Bộ",
                        "Tây Bắc và Đồng bằng sông Hồng",
                    ],
                    correctAnswer:
                        "Tây Bắc, Tây Nguyên, Tây Nam Bộ và Tây Duyên hải miền Trung",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Đảng Cộng sản Việt Nam xác định việc củng cố khối đại đoàn kết dân tộc và đoàn kết tôn giáo là vấn đề như thế nào?",
                    options: [
                        "Ngắn hạn và tạm thời",
                        "Chiến lược, cơ bản, lâu dài và cấp bách",
                        "Chỉ cần thiết trong thời kỳ đổi mới",
                        "Chủ yếu thuộc phạm vi tôn giáo",
                    ],
                    correctAnswer: "Chiến lược, cơ bản, lâu dài và cấp bách",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam cần tuân thủ nguyên tắc nào?",
                    options: [
                        "Đặt vấn đề tôn giáo cao hơn dân tộc",
                        "Giải quyết tôn giáo trên cơ sở vấn đề dân tộc, giữ vững độc lập chủ quyền",
                        "Ưu tiên tôn giáo thiểu số hơn tôn giáo đa số",
                        "Xóa bỏ các tín ngưỡng truyền thống",
                    ],
                    correctAnswer:
                        "Giải quyết tôn giáo trên cơ sở vấn đề dân tộc, giữ vững độc lập chủ quyền",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Mục tiêu cuối cùng của việc giải quyết tốt mối quan hệ dân tộc và tôn giáo ở nước ta là gì?",
                    options: [
                        "Phát triển kinh tế thị trường tự do",
                        "Đảm bảo ổn định chính trị, xây dựng đất nước giàu mạnh, văn minh",
                        "Mở rộng hợp tác tôn giáo quốc tế",
                        "Tách biệt dân tộc với tôn giáo",
                    ],
                    correctAnswer:
                        "Đảm bảo ổn định chính trị, xây dựng đất nước giàu mạnh, văn minh",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Cương lĩnh dân tộc",
                            definition:
                                "Quan điểm của Lênin về quyền bình đẳng, tự quyết và liên hiệp công nhân các dân tộc.",
                        },
                        {
                            term: "Tôn giáo",
                            definition:
                                "Một hình thái ý thức xã hội, phản ánh hư ảo hiện thực khách quan.",
                        },
                        {
                            term: "Đại đoàn kết dân tộc",
                            definition:
                                "Chính sách nhất quán của Đảng và Nhà nước Việt Nam.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các khái niệm về dân tộc với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Dân tộc",
                            definition:
                                "Cộng đồng người có chung nguồn gốc, lãnh thổ, ngôn ngữ, văn hóa và tâm lý xã hội.",
                        },
                        {
                            term: "Vấn đề dân tộc",
                            definition:
                                "Những mâu thuẫn, xung đột giữa các dân tộc trong quá trình phát triển xã hội.",
                        },
                        {
                            term: "Quyền tự quyết dân tộc",
                            definition:
                                "Quyền của mỗi dân tộc tự quyết định vận mệnh của mình.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các khái niệm về tôn giáo với nội dung tương ứng.",
                    pairs: [
                        {
                            term: "Tôn giáo",
                            definition:
                                "Hình thức ý thức xã hội đặc biệt, phản ánh thế giới bằng hình ảnh siêu nhiên.",
                        },
                        {
                            term: "Nguồn gốc tôn giáo",
                            definition:
                                "Từ sự bất lực của con người trước các lực lượng tự nhiên và xã hội.",
                        },
                        {
                            term: "Chính sách tôn giáo ở Việt Nam",
                            definition:
                                "Tôn trọng quyền tự do tín ngưỡng, tôn giáo và quyền không tín ngưỡng.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các nguyên tắc giải quyết vấn đề dân tộc với nội dung cụ thể.",
                    pairs: [
                        {
                            term: "Bình đẳng dân tộc",
                            definition:
                                "Các dân tộc có quyền và nghĩa vụ ngang nhau trước pháp luật.",
                        },
                        {
                            term: "Đoàn kết dân tộc",
                            definition:
                                "Các dân tộc cùng chung sống, hợp tác và giúp đỡ lẫn nhau.",
                        },
                        {
                            term: "Phát triển toàn diện",
                            definition:
                                "Mọi dân tộc đều được phát triển về kinh tế, văn hóa, xã hội.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối vai trò của tôn giáo với biểu hiện cụ thể.",
                    pairs: [
                        {
                            term: "Vai trò tích cực",
                            definition:
                                "Giáo dục đạo đức, khuyến khích lòng nhân ái và tinh thần cộng đồng.",
                        },
                        {
                            term: "Vai trò tiêu cực",
                            definition:
                                "Có thể bị lợi dụng để chia rẽ đoàn kết dân tộc.",
                        },
                        {
                            term: "Xu hướng phát triển",
                            definition:
                                "Tôn giáo sẽ tồn tại lâu dài trong xã hội XHCN.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối chính sách dân tộc của Việt Nam với nội dung thực hiện.",
                    pairs: [
                        {
                            term: "Chính sách ưu tiên",
                            definition:
                                "Hỗ trợ phát triển kinh tế - xã hội vùng dân tộc thiểu số.",
                        },
                        {
                            term: "Bảo tồn văn hóa",
                            definition:
                                "Giữ gìn và phát huy bản sắc văn hóa các dân tộc.",
                        },
                        {
                            term: "Xóa đói giảm nghèo",
                            definition:
                                "Tập trung nguồn lực cải thiện đời sống vùng dân tộc.",
                        },
                    ],
                },
            ],
        },
        {
            id: "chuong-7",
            title: "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
            sections: [
                {
                    id: "7-1",
                    chapterTitle:
                        "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
                    title: "7.1. Khái niệm và vai trò của gia đình",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        { type: "paragraph", text: "1.1. Khái niệm" },
                        {
                            type: "list",
                            items: [
                                "Gia đình là tế bào cơ bản của xã hội, được hình thành trên cơ sở hôn nhân, huyết thống và nuôi dưỡng.",
                                "Là môi trường đầu tiên hình thành, giáo dục và phát triển nhân cách con người.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Khái niệm gia đình_1762454737193.jpg",
                            caption: "Sơ đồ Khái niệm gia đình.",
                        },
                        {
                            type: "paragraph",
                            text: "1.2. Vai trò của gia đình",
                        },
                        {
                            type: "list",
                            items: [
                                "Sinh học: duy trì nòi giống, tái sản xuất con người.",
                                "Kinh tế: đơn vị tiêu dùng và sản xuất nhỏ, tạo nguồn lực lao động.",
                                "Giáo dục: hình thành nhân cách, đạo đức, lối sống.",
                                "Tình cảm – văn hóa: nơi nuôi dưỡng tình yêu thương, gắn bó, đoàn kết. → Gia đình là nền tảng của xã hội, ổn định gia đình → ổn định xã hội.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Vai trò của gia đình_1762454737194.jpg",
                            caption: "Sơ đồ Vai trò của gia đình.",
                        },
                    ],
                },
                {
                    id: "7-2",
                    chapterTitle:
                        "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
                    title: "7.2. Cơ sở hình thành và phát triển gia đình",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        { type: "paragraph", text: "2.1. Cơ sở kinh tế" },
                        {
                            type: "list",
                            items: [
                                "Trong CNXH, chế độ công hữu về tư liệu sản xuất làm thay đổi căn bản quan hệ kinh tế trong gia đình.",
                                "Nam và nữ bình đẳng về quyền lao động, quyền sở hữu và thụ hưởng, cùng nhau xây dựng hạnh phúc gia đình.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Cơ sở kinh tế của gia đình (CNXH)_1762454737193.jpg",
                            caption: "Sơ đồ Cơ sở kinh tế của gia đình (CNXH).",
                        },
                        {
                            type: "paragraph",
                            text: "2.2. Cơ sở chính trị – xã hội",
                        },
                        {
                            type: "list",
                            items: [
                                "Nhà nước XHCN bảo vệ hôn nhân tự nguyện, bình đẳng, tiến bộ, chống mọi hình thức ép hôn, trọng nam khinh nữ, bạo lực gia đình.",
                                "Gia đình trở thành tế bào của hệ thống xã hội XHCN, gắn bó với sự phát triển của đất nước.",
                            ],
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/UEYyKVV5FKE",
                            caption:
                                "Review Luật Hôn Nhân Và Gia Đình 2014: Nhiều Điểm Mới Có Thể Bạn Chưa Biết | LuatVietnam",
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Cơ sở chính trị - xã hội_1762454737192.jpg",
                            caption: "Sơ đồ Cơ sở chính trị - xã hội.",
                        },
                        {
                            type: "paragraph",
                            text: "2.3. Cơ sở văn hóa – đạo đức",
                        },
                        {
                            type: "image",
                            url: "images/Hội Kế hoạch hóa gia đình Việt Nam kỷ niệm 30 năm thành lập_1762454737192.jpg",
                            caption:
                                "Hội Kế hoạch hóa gia đình Việt Nam kỷ niệm 30 năm thành lập.",
                        },
                        {
                            type: "list",
                            items: [
                                "CNXH xây dựng chuẩn mực đạo đức mới trong quan hệ vợ chồng, cha mẹ - con cái, ông bà – cháu chắt.",
                                "Kế thừa truyền thống gia đình Việt Nam (hiếu thảo, thủy chung, nhân nghĩa) kết hợp với giá trị hiện đại (bình đẳng, dân chủ, nhân văn).",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Cơ sở văn hóa - đạo đức_1762454737193.jpg",
                            caption: "Sơ đồ Cơ sở văn hóa - đạo đức.",
                        },
                    ],
                },
                {
                    id: "7-3",
                    chapterTitle:
                        "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
                    title: "7.3. Biến đổi của gia đình trong thời kỳ quá độ",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "paragraph",
                            text: "3.1. Những thay đổi tích cực",
                        },
                        {
                            type: "list",
                            items: [
                                "Quy mô gia đình thu nhỏ, chuyển từ đại gia đình sang gia đình hạt nhân (cha mẹ – con cái).",
                                "Quan hệ vợ chồng bình đẳng, dân chủ hơn, phụ nữ có địa vị cao hơn.",
                                "Giáo dục, chăm sóc con cái có điều kiện tốt hơn.",
                                "Đời sống vật chất và tinh thần được nâng cao.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ những thay đổi tích cực của gia đình_1762454737193.jpg",
                            caption:
                                "Sơ đồ những thay đổi tích cực của gia đình.",
                        },
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/I3wyV4uHB7M",
                            caption:
                                "Văn hóa gia đình Việt Nam trong xã hội hiện đại | VTV4",
                        },
                        {
                            type: "image",
                            url: "images/Cán bộ tuyên truyền về kế hoạch hóa gia đình_1762454737192.jpg",
                            caption:
                                "Cán bộ tuyên truyền về kế hoạch hóa gia đình.",
                        },
                        {
                            type: "paragraph",
                            text: "3.2. Những vấn đề nảy sinh",
                        },
                        {
                            type: "list",
                            items: [
                                "Áp lực kinh tế, di cư, công nghiệp hóa dẫn đến khoảng cách thế hệ, giảm gắn kết.",
                                "Ly hôn, bạo lực, ngoại tình, thiếu trách nhiệm nuôi con gia tăng.",
                                "Một số giá trị truyền thống bị mai một do ảnh hưởng tiêu cực của kinh tế thị trường và văn hóa ngoại lai.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ những vấn đề nảy sinh trong gia đình hiện đại_1762454737194.jpg",
                            caption:
                                "Sơ đồ những vấn đề nảy sinh trong gia đình hiện đại.",
                        },
                    ],
                },
                {
                    id: "7-4",
                    chapterTitle:
                        "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
                    title: "7.4. Xây dựng gia đình Việt Nam hiện nay",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        { type: "paragraph", text: "4.1. Quan điểm cơ bản" },
                        {
                            type: "list",
                            items: [
                                "Gia đình XHCN phải là: “No ấm, bình đẳng, tiến bộ, hạnh phúc, bền vững.”",
                                "Là sự kết hợp hài hòa giữa truyền thống dân tộc và giá trị hiện đại.",
                            ],
                        },
                        { type: "paragraph", text: "4.2. Nội dung xây dựng" },
                        {
                            type: "list",
                            items: [
                                "Kinh tế: Lao động, sản xuất, tạo thu nhập chính đáng; thực hành tiết kiệm.",
                                "Giáo dục: Xây dựng nếp sống văn hóa, nuôi dạy con ngoan, học giỏi.",
                                "Quan hệ bình đẳng giới: Nam – nữ cùng chia sẻ trách nhiệm, tôn trọng lẫn nhau.",
                                "Đời sống tinh thần: Giữ gìn truyền thống, xây dựng môi trường gia đình văn minh, nhân ái.",
                                "Pháp luật và chính sách: Tuân thủ Luật Hôn nhân và Gia đình; phòng, chống bạo lực gia đình.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Nội dung xây dựng gia đình XHCN_1762454737193.jpg",
                            caption: "Sơ đồ Nội dung xây dựng gia đình XHCN.",
                        },
                        { type: "paragraph", text: "5.1. Xu hướng phát triển" },
                        {
                            type: "list",
                            items: [
                                "Đa dạng mô hình gia đình, nhưng vẫn hướng tới giá trị truyền thống tốt đẹp.",
                                "Phụ nữ và trẻ em được bảo vệ và phát huy vai trò tích cực hơn.",
                                "Các giá trị “ấm no – bình đẳng – tiến bộ – hạnh phúc” được cụ thể hóa trong chính sách xã hội.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Xu hướng phát triển gia đình Việt Nam_1762454737195.jpg",
                            caption:
                                "Sơ đồ Xu hướng phát triển gia đình Việt Nam.",
                        },
                        {
                            type: "paragraph",
                            text: "5.2. Vai trò của Nhà nước và xã hội",
                        },
                        {
                            type: "list",
                            items: [
                                "Thực hiện Chiến lược phát triển gia đình Việt Nam đến năm 2030.",
                                "Tuyên truyền, giáo dục, hỗ trợ gia đình nghèo, phòng chống tệ nạn xã hội.",
                                "Xây dựng môi trường xã hội lành mạnh để gia đình phát triển bền vững.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Vai trò nhà nước & xã hội_1762454737195.jpg",
                            caption: "Sơ đồ Vai trò nhà nước & xã hội.",
                        },
                    ],
                },
                {
                    id: "7-5",
                    chapterTitle:
                        "Chương 7: Vấn đề gia đình trong thời kỳ quá độ lên CNXH",
                    title: "7.5. Ý nghĩa của vấn đề gia đình",
                    citation: "Dựa trên tài liệu ôn tập được cung cấp.",
                    content: [
                        {
                            type: "video",
                            url: "https://www.youtube.com/embed/xGLeuv8M_cE",
                            caption:
                                "Triển khai Chiến lược dân số Việt Nam đến năm 2030.",
                        },
                        {
                            type: "list",
                            items: [
                                "Gia đình là nền tảng tinh thần của xã hội, góp phần ổn định chính trị và phát triển đất nước.",
                                "Xây dựng gia đình XHCN là một mục tiêu và đồng thời là động lực của CNXH.",
                                "Khẳng định vai trò to lớn của phụ nữ, của văn hóa, đạo đức trong sự nghiệp đổi mới.",
                            ],
                        },
                        {
                            type: "diagram",
                            url: "images/Sơ đồ Ý nghĩa của vấn đề gia đình_1762454737195.jpg",
                            caption: "Sơ đồ Ý nghĩa của vấn đề gia đình.",
                        },
                    ],
                },
            ],
            quiz: [
                {
                    type: "multiple-choice",
                    question:
                        "Theo C.Mác và Ph.Ăngghen, cơ sở hình thành gia đình là hai mối quan hệ nào?",
                    options: [
                        "Quan hệ huyết thống và xã hội",
                        "Quan hệ hôn nhân và huyết thống",
                        "Quan hệ xã hội và đạo đức",
                        "Quan hệ pháp lý và đạo lý",
                    ],
                    correctAnswer: "Quan hệ hôn nhân và huyết thống",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quan hệ nào được xem là nền tảng pháp lý cho sự tồn tại của mỗi gia đình?",
                    options: [
                        "Quan hệ huyết thống",
                        "Quan hệ xã hội",
                        "Quan hệ hôn nhân",
                        "Quan hệ nuôi dưỡng",
                    ],
                    correctAnswer: "Quan hệ hôn nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong gia đình, mối quan hệ tự nhiên và mạnh mẽ nhất gắn kết các thành viên là gì?",
                    options: [
                        "Quan hệ huyết thống",
                        "Quan hệ xã hội",
                        "Quan hệ đạo đức",
                        "Quan hệ pháp lý",
                    ],
                    correctAnswer: "Quan hệ huyết thống",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Ph.Ăngghen, yếu tố quyết định trong lịch sử là gì?",
                    options: [
                        "Chính trị và tôn giáo",
                        "Kinh tế và pháp luật",
                        "Sản xuất và tái sản xuất ra đời sống trực tiếp",
                        "Gia đình và giáo dục",
                    ],
                    correctAnswer:
                        "Sản xuất và tái sản xuất ra đời sống trực tiếp",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Chủ tịch Hồ Chí Minh, hạt nhân của xã hội là gì?",
                    options: ["Nhà nước", "Tập thể", "Gia đình", "Xã hội"],
                    correctAnswer: "Gia đình",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Gia đình có vai trò gì đối với sự hình thành nhân cách con người?",
                    options: [
                        "Là nơi truyền đạt tri thức khoa học",
                        "Là môi trường tốt nhất nuôi dưỡng, chăm sóc và giáo dục cá nhân",
                        "Là nơi giao lưu văn hóa xã hội",
                        "Là cơ sở pháp lý của xã hội",
                    ],
                    correctAnswer:
                        "Là môi trường tốt nhất nuôi dưỡng, chăm sóc và giáo dục cá nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong xã hội phong kiến, quy định nào thể hiện rõ tính bất bình đẳng trong gia đình?",
                    options: [
                        "Phụ nữ được tham gia chính trị",
                        "Phụ nữ được học hành",
                        "Phụ nữ phải tuyệt đối trung thành với chồng và cha",
                        "Phụ nữ có quyền sở hữu tài sản",
                    ],
                    correctAnswer:
                        "Phụ nữ phải tuyệt đối trung thành với chồng và cha",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Chức năng nào của gia đình không thể cộng đồng nào khác thay thế được?",
                    options: [
                        "Chức năng giáo dục",
                        "Chức năng tái sản xuất ra con người",
                        "Chức năng kinh tế",
                        "Chức năng văn hóa",
                    ],
                    correctAnswer: "Chức năng tái sản xuất ra con người",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Chức năng nào của gia đình góp phần trực tiếp vào việc đào tạo thế hệ tương lai của xã hội?",
                    options: [
                        "Chức năng giáo dục và nuôi dưỡng",
                        "Chức năng văn hóa",
                        "Chức năng chính trị",
                        "Chức năng tiêu dùng",
                    ],
                    correctAnswer: "Chức năng giáo dục và nuôi dưỡng",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Gia đình được xem là đơn vị duy nhất trong xã hội tham gia vào quá trình sản xuất và tái sản xuất ra yếu tố nào?",
                    options: [
                        "Tư liệu sản xuất",
                        "Nguồn vốn xã hội",
                        "Sức lao động",
                        "Văn hóa vật chất",
                    ],
                    correctAnswer: "Sức lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                    options: [
                        "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới",
                        "Sự phát triển của hệ thống chính tr �� và luật pháp",
                        "Sự thay đổi của tư tưởng và phong tục tập quán",
                        "Sự mở rộng của giáo dục và truyền thông",
                    ],
                    correctAnswer:
                        "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo V.I.Lênin, việc thủ tiêu chế độ tư hữu về ruộng đất, công xưởng và nhà máy có ý nghĩa gì đối với phụ nữ?",
                    options: [
                        "Làm tăng vai trò của phụ nữ trong công nghiệp",
                        "Mở con đường giải phóng hoàn toàn và thật sự cho phụ nữ",
                        "Giúp phụ nữ tiếp cận dễ dàng hơn với giáo dục",
                        "Tạo điều kiện cho phụ nữ tham gia chính trị",
                    ],
                    correctAnswer:
                        "Mở con đường giải phóng hoàn toàn và thật sự cho phụ nữ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Ph.Ăngghen, khi tư liệu sản xuất chuyển thành tài sản chung thì điều gì xảy ra?",
                    options: [
                        "Gia đình cá thể trở thành trung tâm kinh tế của xã hội",
                        "Gia đình cá thể sẽ không còn là đơn vị kinh tế của xã hội nữa",
                        "Nền kinh tế gia đình tư nhân được củng cố",
                        "Lao động trong gia đình không còn giá trị",
                    ],
                    correctAnswer:
                        "Gia đình cá thể sẽ không còn là đơn vị kinh tế của xã hội nữa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Cơ sở chính trị - xã hội của việc xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                    options: [
                        "Nhà nước tư sản dân chủ",
                        "Chính quyền của giai cấp công nhân và nhân dân lao động",
                        "Các tổ chức xã hội dân sự",
                        "Cơ chế thị trường tự do",
                    ],
                    correctAnswer:
                        "Chính quyền của giai cấp công nhân và nhân dân lao động",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Theo Lênin, chính quyền Xô viết đã làm gì để bảo đảm quyền bình đẳng cho phụ nữ?",
                    options: [
                        "Tăng cường vai trò tôn giáo trong xã hội",
                        "Duy trì các đặc quyền của đàn ông trong gia đình",
                        "Thủ tiêu toàn bộ pháp luật tư sản, bất bình đẳng giới",
                        "Cấm phụ nữ tham gia chính trị và quân sự",
                    ],
                    correctAnswer:
                        "Thủ tiêu toàn bộ pháp luật tư sản, bất bình đẳng giới",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Thiếu cơ sở văn hóa trong quá trình xây dựng gia đình sẽ dẫn đến điều gì?",
                    options: [
                        "Gia đình phát triển mạnh mẽ hơn",
                        "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao",
                        "Mối quan hệ trong gia đình bền chặt hơn",
                        "Hôn nhân trở nên ổn định và hạnh phúc hơn",
                    ],
                    correctAnswer:
                        "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao",
                },
                {
                    type: "multiple-choice",
                    question: "Hôn nhân tiến bộ được xây dựng trên cơ sở nào?",
                    options: [
                        "Lợi ích kinh tế",
                        "Quyết định của cha mẹ",
                        "Tình yêu và sự tự nguyện giữa nam và nữ",
                        "Vị thế xã hội của hai bên",
                    ],
                    correctAnswer: "Tình yêu và sự tự nguyện giữa nam và nữ",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Hôn nhân một vợ một chồng trong thời kỳ quá độ lên chủ nghĩa xã hội có ý nghĩa gì?",
                    options: [
                        "Thể hiện quyền lực của người đàn ông",
                        "Là kết quả tất yếu của hôn nhân xuất phát từ tình yêu",
                        "Giúp duy trì chế độ tư hữu về tài sản",
                        "Củng cố quan hệ gia đình truyền thống phong kiến",
                    ],
                    correctAnswer:
                        "Là kết quả tất yếu của hôn nhân xuất phát từ tình yêu",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Quan hệ vợ chồng bình đẳng góp phần tạo cơ sở cho điều gì trong gia đình?",
                    options: [
                        "Sự cạnh tranh giữa các thành viên",
                        "Sự tách biệt giữa các thế hệ",
                        "Sự phân chia quyền lực trong gia đình",
                        "Sự bình đẳng giữa cha mẹ và con cái, anh chị em với nhau",
                    ],
                    correctAnswer:
                        "Sự bình đẳng giữa cha mẹ và con cái, anh chị em với nhau",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Việc thực hiện thủ tục pháp lý trong hôn nhân nhằm mục đích gì?",
                    options: [
                        "Ngăn cản quyền tự do kết hôn",
                        "Tăng quyền lực của nam giới trong gia đình",
                        "Thúc đẩy hôn nhân vì mục đích kinh tế",
                        "Bảo đảm sự tôn trọng và trách nhiệm trong hôn nhân",
                    ],
                    correctAnswer:
                        "Bảo đảm sự tôn trọng và trách nhiệm trong hôn nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Gia đình Việt Nam ngày nay được xem là “gia đình quá độ” vì sao?",
                    options: [
                        "Đang chuyển từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại",
                        "Vẫn duy trì đầy đủ cấu trúc gia đình truyền thống",
                        "Chưa có sự thay đổi về quy mô và chức năng",
                        "Đang quay lại mô hình đại gia đình nhiều thế hệ",
                    ],
                    correctAnswer:
                        "Đang chuyển từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Kiểu gia đình nào đang trở nên phổ biến ở Việt Nam hiện nay, thay thế cho kiểu gia đình truyền thống?",
                    options: [
                        "Gia đình tộc họ",
                        "Gia đình hạt nhân",
                        "Gia đình mở rộng",
                        "Gia đình đa thế hệ",
                    ],
                    correctAnswer: "Gia đình hạt nhân",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những hạn chế do thu nhỏ quy mô gia đình là gì?",
                    options: [
                        "Tăng cường mối quan hệ giữa các thành viên",
                        "Dễ dàng gìn giá giá trị truyền thống",
                        "Tạo ra sự ngăn cách và giảm gắn kết tình cảm",
                        "Làm giảm áp lực kinh tế cho các hộ gia đình",
                    ],
                    correctAnswer:
                        "Tạo ra sự ngăn cách và giảm gắn kết tình cảm",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong chức năng tái sản xuất, chính sách kế hoạch hóa gia đình ở Việt Nam hiện nay khuyến khích mỗi cặp vợ chồng:",
                    options: [
                        "Chỉ nên sinh một con",
                        "Sinh đủ hai con",
                        "Không giới hạn số con",
                        "Tùy ý sinh theo điều kiện cá nhân",
                    ],
                    correctAnswer: "Sinh đủ hai con",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong xã hội hiện đại, yếu tố nào được xem là quyết định sự bền vững của hôn nhân?",
                    options: [
                        "Số lượng con trai",
                        "Sự tương hợp về tâm lý, tình cảm và kinh tế",
                        "Tài sản và dòng họ",
                        "Ý kiến của cha mẹ hai bên",
                    ],
                    correctAnswer:
                        "Sự tương hợp về tâm lý, tình cảm và kinh tế",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Kinh tế gia đình Việt Nam hiện nay đang chuyển từ:",
                    options: [
                        "Kinh tế tự cấp tự túc sang kinh tế hàng hóa",
                        "Kinh tế tập thể sang kinh tế bao cấp",
                        "Kinh tế công nghiệp sang kinh tế nông nghiệp",
                        "Kinh tế thị trường sang kinh tế khép kín",
                    ],
                    correctAnswer:
                        "Kinh tế tự cấp tự túc sang kinh tế hàng hóa",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Sự phát triển của giáo dục xã hội hiện nay đã dẫn đến hệ quả nào trong giáo dục gia đình?",
                    options: [
                        "Tăng vai trò của cha mẹ trong dạy con",
                        "Làm giảm vai trò giáo dục của gia đình",
                        "Làm gia đình chú trọng hơn về đạo đức truyền thống",
                        "Xóa bỏ hoàn toàn vai trò giáo dục của nhà trường",
                    ],
                    correctAnswer: "Làm giảm vai trò giáo dục của gia đình",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Trong xã hội hiện đại, gia đình Việt Nam có xu hướng chuyển từ đơn vị kinh tế sang đơn vị gì?",
                    options: [
                        "Đơn vị chính trị",
                        "Đơn vị quản lý",
                        "Đơn vị tình cảm",
                        "Đơn vị sản xuất",
                    ],
                    correctAnswer: "Đơn vị tình cảm",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Một trong những mô hình mới của gia đình Việt Nam hiện nay là gì?",
                    options: [
                        "Chỉ người chồng làm chủ gia đình",
                        "Chỉ người vợ làm chủ gia đình",
                        "Cả hai vợ chồng cùng làm chủ gia đình",
                        "Con cái làm chủ gia đình",
                    ],
                    correctAnswer: "Cả hai vợ chồng cùng làm chủ gia đình",
                },
                {
                    type: "multiple-choice",
                    question:
                        "Thách thức lớn nhất trong quan hệ giữa các thế hệ trong gia đình Việt Nam hiện nay là:",
                    options: [
                        "Mâu thuẫn do khác biệt giá trị truyền thống và hiện đại",
                        "Thiếu thốn vật chất trong sinh hoạt",
                        "Tác động của chính sách dân số",
                        "Sự can thiệp quá mức của nhà trường",
                    ],
                    correctAnswer:
                        "Mâu thuẫn do khác biệt giá trị truyền thống và hiện đại",
                },
                {
                    type: "matching",
                    question:
                        "Hãy nối các khái niệm sau với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Gia đình",
                            definition:
                                "Tế bào của xã hội, là hình thức cộng đồng xã hội đặc biệt.",
                        },
                        {
                            term: "Hôn nhân tự nguyện, tiến bộ",
                            definition:
                                "Hôn nhân dựa trên tình yêu chân chính, đảm bảo bình đẳng nam nữ.",
                        },
                        {
                            term: "Chức năng gia đình",
                            definition:
                                "Tái sản xuất ra con người, nuôi dưỡng, giáo dục, kinh tế và thỏa mãn tình cảm.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các khái niệm về gia đình với định nghĩa tương ứng.",
                    pairs: [
                        {
                            term: "Quan hệ hôn nhân",
                            definition:
                                "Nền tảng pháp lý cho sự tồn tại của mỗi gia đình.",
                        },
                        {
                            term: "Quan hệ huyết thống",
                            definition:
                                "Mối quan hệ tự nhiên và mạnh mẽ nhất gắn kết các thành viên trong gia đình.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối các chức năng của gia đình với nội dung cụ thể.",
                    pairs: [
                        {
                            term: "Chức năng sinh học",
                            definition:
                                "Duy trì nòi giống, tái sản xuất con người.",
                        },
                        {
                            term: "Chức năng giáo dục",
                            definition:
                                "Hình thành nhân cách, đạo đức, lối sống.",
                        },
                        {
                            term: "Chức năng kinh tế",
                            definition:
                                "Đơn vị tiêu dùng và sản xuất nhỏ, tạo nguồn lực lao động.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question: "Nối cơ sở xây dựng gia đình XHCN với nội dung.",
                    pairs: [
                        {
                            term: "Cơ sở kinh tế",
                            definition:
                                "Chế độ công hữu về tư liệu sản xuất, nam và nữ bình đẳng về quyền lao động.",
                        },
                        {
                            term: "Cơ sở chính trị - xã hội",
                            definition:
                                "Nhà nước XHCN bảo vệ hôn nhân tự nguyện, bình đẳng, tiến bộ.",
                        },
                        {
                            term: "Cơ sở văn hóa - đạo đức",
                            definition:
                                "Kế thừa truyền thống gia đình Việt Nam kết hợp với giá trị hiện đại.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối những thay đổi của gia đình với biểu hiện cụ thể.",
                    pairs: [
                        {
                            term: "Thay đổi về quy mô",
                            definition:
                                "Chuyển từ đại gia đình sang gia đình hạt nhân.",
                        },
                        {
                            term: "Thay đổi về quan hệ",
                            definition:
                                "Quan hệ vợ chồng bình đẳng, dân chủ hơn.",
                        },
                        {
                            term: "Thay đổi về đời sống",
                            definition:
                                "Đời sống vật chất và tinh thần được nâng cao.",
                        },
                    ],
                },
                {
                    type: "matching",
                    question:
                        "Nối nội dung xây dựng gia đình XHCN với yêu cầu cụ thể.",
                    pairs: [
                        {
                            term: "Về kinh tế",
                            definition:
                                "Lao động, sản xuất, tạo thu nhập chính đáng; thực hành tiết kiệm.",
                        },
                        {
                            term: "Về giáo dục",
                            definition:
                                "Xây dựng nếp sống văn hóa, nuôi dạy con ngoan, học giỏi.",
                        },
                        {
                            term: "Về bình đẳng giới",
                            definition:
                                "Nam – nữ cùng chia sẻ trách nhiệm, tôn trọng lẫn nhau.",
                        },
                    ],
                },
            ],
        },
    ];

    // FIX: Add data for placement test questions
    private placementTestQuestions: PlacementTestQuestion[] = [
        {
            question:
                "Theo nghĩa rộng, Chủ nghĩa xã hội khoa học được hiểu là gì?",
            options: [
                "Một học thuyết kinh tế học thuần túy của C.Mác",
                "Toàn bộ chủ nghĩa Mác - Lênin, luận giải sự chuyển biến tất yếu từ CNTB lên CNXH và CNCS",
                "Một phần trong triết học cổ điển Đức",
                "Một phong trào chính trị của giai cấp công nhân",
            ],
            correctAnswer:
                "Toàn bộ chủ nghĩa Mác - Lênin, luận giải sự chuyển biến tất yếu từ CNTB lên CNXH và CNCS",
            relatedSectionId: "1-1",
        },
        {
            question:
                "Theo C. Mác và Ph. Ăngghen, giai cấp công nhân là con đẻ của:",
            options: [
                "Nền nông nghiệp tư bản chủ nghĩa",
                "Nền đại công nghiệp tư bản chủ nghĩa",
                "Nền thương nghiệp hiện đại",
                "Nền kinh tế tiểu thủ công nghiệp",
            ],
            correctAnswer: "Nền đại công nghiệp tư bản chủ nghĩa",
            relatedSectionId: "2-1",
        },
        {
            question:
                "Theo học thuyết của chủ nghĩa Mác - Lênin, sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái cộng sản chủ nghĩa là gì?",
            options: [
                "Một sự kiện chính trị ngẫu nhiên",
                "Một quá trình lịch sử - tự nhiên",
                "Một hoạt động tôn giáo",
                "Một quyết định chính trị",
            ],
            correctAnswer: "Một quá trình lịch sử - tự nhiên",
            relatedSectionId: "3-1",
        },
        {
            question:
                "Theo quan điểm của chủ nghĩa Mác – Lênin, dân chủ trước hết là gì?",
            options: [
                "Quyền lực thuộc về nhà nước",
                "Quyền lực thuộc về nhân dân",
                "Quyền tự do cá nhân tuyệt đối",
                "Quyền của giai cấp cầm quyền",
            ],
            correctAnswer: "Quyền lực thuộc về nhân dân",
            relatedSectionId: "4-1",
        },
        {
            question:
                "Trong các loại hình cơ cấu xã hội, cơ cấu xã hội - giai cấp giữ vị trí quan trọng hàng đầu vì liên quan trực tiếp đến yếu tố nào?",
            options: [
                "Văn hóa và giáo dục",
                "Môi trường và dân số",
                "Nghề nghiệp và tôn giáo",
                "Quyền sở hữu tư liệu sản xuất và quyền lực chính trị",
            ],
            correctAnswer:
                "Quyền sở hữu tư liệu sản xuất và quyền lực chính trị",
            relatedSectionId: "5-1",
        },
        {
            question:
                "Theo chủ nghĩa Mác – Lênin, đặc trưng quan trọng nhất của dân tộc (nation) là gì?",
            options: [
                "Có ngôn ngữ chung trong xã hội",
                "Có lãnh thổ chung ổn định",
                "Có nhà nước quản lý thống nhất",
                "Có chung phương thức sinh hoạt kinh tế",
            ],
            correctAnswer: "Có chung phương thức sinh hoạt kinh tế",
            relatedSectionId: "6-1",
        },
        {
            question:
                "Theo C.Mác và Ph.Ăngghen, cơ sở hình thành gia đình là hai mối quan hệ nào?",
            options: [
                "Quan hệ huyết thống và xã hội",
                "Quan hệ hôn nhân và huyết thống",
                "Quan hệ xã hội và đạo đức",
                "Quan hệ pháp lý và đạo lý",
            ],
            correctAnswer: "Quan hệ hôn nhân và huyết thống",
            relatedSectionId: "7-1",
        },
    ];

    getChapters(): Chapter[] {
        return this.chapters;
    }

    getQuestionsForChapter(chapterId: string): QuizQuestion[] {
        const chapter = this.chapters.find((c) => c.id === chapterId);
        return chapter ? chapter.quiz : [];
    }

    getAllQuestions(): QuizQuestion[] {
        return this.chapters.reduce(
            (acc, chapter) => acc.concat(chapter.quiz),
            [] as QuizQuestion[],
        );
    }

    getAllMultipleChoiceQuestions(): MultipleChoiceQuestion[] {
        return this.getAllQuestions().filter(
            (q) => q.type === "multiple-choice",
        ) as MultipleChoiceQuestion[];
    }

    getAllMatchingQuestions(): MatchingQuestion[] {
        return this.getAllQuestions().filter(
            (q) => q.type === "matching",
        ) as MatchingQuestion[];
    }

    // FIX: Add missing getPlacementTestQuestions method to prevent runtime errors.
    getPlacementTestQuestions(): PlacementTestQuestion[] {
        return this.placementTestQuestions;
    }
}
