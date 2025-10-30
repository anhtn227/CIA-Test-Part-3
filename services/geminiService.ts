
import { Question } from '../types';

const mockQuestions: Question[] = [
    {
        id: 1,
        unit: 'governance',
        topic: 'Chức năng Quản lý Kiểm toán',
        question_en: "A chief audit executive is coordinating the internal audit team's testing of internal controls over financial reporting with the external auditors. This is an example of which basic function of internal audit management?",
        question_vn: "Một trưởng kiểm toán nội bộ đang phối hợp với nhóm kiểm toán nội bộ để kiểm tra các kiểm soát nội bộ về báo cáo tài chính cùng với các kiểm toán viên bên ngoài. Đây là ví dụ về chức năng cơ bản nào của quản lý kiểm toán nội bộ?",
        options: [
            { text_en: 'Organizing.', text_vn: 'Tổ chức.' },
            { text_en: 'Monitoring.', text_vn: 'Giám sát.' },
            { text_en: 'Planning.', text_vn: 'Lập kế hoạch.' },
            { text_en: 'Directing.', text_vn: 'Chỉ đạo.', is_correct: true }
        ],
        explanation_en: 'Directing involves guiding and overseeing the work of the audit team. Coordinating with external auditors is a key part of directing the engagement to ensure efficiency and avoid duplication of effort.',
        explanation_vn: 'Chỉ đạo bao gồm việc hướng dẫn và giám sát công việc của nhóm kiểm toán. Phối hợp với các kiểm toán viên bên ngoài là một phần quan trọng của việc chỉ đạo cuộc kiểm toán để đảm bảo hiệu quả và tránh trùng lặp công việc.',
        citation: 'P3 Simulated Exam 1, Question 1'
    },
    {
        id: 2,
        unit: 'governance',
        topic: 'Giám sát Hoạt động Kiểm toán',
        question_en: "Which of the following is the best example of a direct method used to monitor internal audit operations?",
        question_vn: "Ví dụ nào sau đây là tốt nhất về một phương pháp trực tiếp được sử dụng để giám sát hoạt động kiểm toán nội bộ?",
        options: [
            { text_en: 'Human resources practices that recruit internal auditors from other functions.', text_vn: 'Các thực hành nhân sự tuyển dụng kiểm toán viên nội bộ từ các chức năng khác.' },
            { text_en: 'Research into trends in the industry to which the organization belongs.', text_vn: 'Nghiên cứu các xu hướng trong ngành mà tổ chức thuộc về.' },
            { text_en: 'Feedback from internal audit stakeholders regarding the efficiency and effectiveness of the internal audit function.', text_vn: 'Phản hồi từ các bên liên quan của kiểm toán nội bộ về hiệu quả và hiệu suất của chức năng kiểm toán nội bộ.', is_correct: true },
            { text_en: 'Coordination of work with the risk management function on conducting risk assessments.', text_vn: 'Phối hợp công việc với chức năng quản lý rủi ro về việc thực hiện đánh giá rủi ro.' }
        ],
        explanation_en: 'Direct monitoring involves gathering feedback on performance. Soliciting feedback from stakeholders is a direct way to assess the efficiency and effectiveness of the audit function.',
        explanation_vn: 'Giám sát trực tiếp bao gồm việc thu thập phản hồi về hiệu suất. Việc lấy ý kiến phản hồi từ các bên liên quan là một cách trực tiếp để đánh giá hiệu quả và hiệu suất của chức năng kiểm toán.',
        citation: 'P3 Simulated Exam 1, Question 2'
    },
    {
        id: 3,
        unit: 'governance',
        topic: 'Hoạch định chiến lược Kiểm toán',
        question_en: "Which of the following would an organization's chief audit executive likely use to assess and determine the resources needed to fulfill the internal audit function's strategic plan?",
        question_vn: "Trưởng kiểm toán nội bộ của một tổ chức có khả năng sử dụng phương pháp nào sau đây để đánh giá và xác định các nguồn lực cần thiết để thực hiện kế hoạch chiến lược của chức năng kiểm toán nội bộ?",
        options: [
            { text_en: 'An assurance map.', text_vn: 'Bản đồ đảm bảo.' },
            { text_en: 'A SWOT (strengths, weaknesses, opportunities, and threats) analysis.', text_vn: 'Phân tích SWOT (điểm mạnh, điểm yếu, cơ hội và thách thức).', is_correct: true },
            { text_en: 'A Six Sigma analysis.', text_vn: 'Phân tích Six Sigma.' },
            { text_en: 'A maturity model.', text_vn: 'Mô hình trưởng thành.' }
        ],
        explanation_en: 'A SWOT analysis is a strategic planning tool used to identify internal strengths and weaknesses, as well as external opportunities and threats. This is essential for resource allocation and strategic planning for the audit function.',
        explanation_vn: 'Phân tích SWOT là một công cụ lập kế hoạch chiến lược được sử dụng để xác định các điểm mạnh và điểm yếu bên trong, cũng như các cơ hội và thách thức bên ngoài. Điều này rất cần thiết cho việc phân bổ nguồn lực và lập kế hoạch chiến lược cho chức năng kiểm toán.',
        citation: 'P3 Simulated Exam 1, Question 3'
    },
    {
        id: 4,
        unit: 'risk_management',
        topic: 'Quản lý rủi ro & Cắt giảm ngân sách',
        question_en: "Corporate management has just implemented a policy that every department must downsize by immediately cutting 10% of its staff and budget. The chief audit executive (CAE) has reacted by notifying audit managers that time allocated for all jobs must be cut by 10%. Which of the following statements is true?",
        question_vn: "Ban quản lý công ty vừa thực hiện một chính sách yêu cầu mỗi phòng ban phải cắt giảm ngay lập tức 10% nhân sự và ngân sách. Trưởng kiểm toán nội bộ (CAE) đã phản ứng bằng cách thông báo cho các quản lý kiểm toán rằng thời gian dành cho tất cả các công việc phải được cắt giảm 10%. Phát biểu nào sau đây là đúng?",
        options: [
            { text_en: 'The CAE should have reprioritized risks and cut out specific audit engagements rather than cutting 10% across the board.', text_vn: 'CAE nên đã ưu tiên lại các rủi ro và loại bỏ các cuộc kiểm toán cụ thể thay vì cắt giảm 10% đồng đều.', is_correct: true },
            { text_en: 'Individual audit managers can attain 90% of the previously defined audit coverage by uniformly cutting audit procedures by 10%.', text_vn: 'Các quản lý kiểm toán cá nhân có thể đạt được 90% phạm vi kiểm toán đã xác định trước đó bằng cách cắt giảm đồng đều 10% các thủ tục kiểm toán.' },
            { text_en: 'The CAE should have informed corporate management that the audit department is not subject to this 10% cut.', text_vn: 'CAE nên đã thông báo cho ban quản lý rằng bộ phận kiểm toán không phải chịu sự cắt giảm 10% này.' }
        ],
        explanation_en: 'A risk-based approach requires reprioritizing audit activities based on risk when resources change. An across-the-board cut is not a risk-based approach and may result in neglecting high-risk areas while still auditing low-risk areas.',
        explanation_vn: 'Phương pháp tiếp cận dựa trên rủi ro đòi hỏi phải ưu tiên lại các hoạt động kiểm toán dựa trên rủi ro khi nguồn lực thay đổi. Việc cắt giảm đồng đều không phải là cách tiếp cận dựa trên rủi ro và có thể dẫn đến việc bỏ qua các lĩnh vực rủi ro cao trong khi vẫn kiểm toán các lĩnh vực rủi ro thấp.',
        citation: 'P3 Simulated Exam 1, Question 4'
    },
     {
        id: 5,
        unit: 'it_governance',
        topic: 'Rủi ro công nghệ thông tin',
        question_en: "An internet service provider's large internal audit function has a primary operational objective of accomplishing 100% of its annual risk-based internal audit plan. Assuming that all of the following are true, which is a risk to accomplishing this objective?",
        question_vn: "Chức năng kiểm toán nội bộ lớn của một nhà cung cấp dịch vụ internet có mục tiêu hoạt động chính là hoàn thành 100% kế hoạch kiểm toán nội bộ dựa trên rủi ro hàng năm. Giả sử tất cả những điều sau đây là đúng, đâu là rủi ro để hoàn thành mục tiêu này?",
        options: [
            { text_en: 'The internal audit committee’s priority appears to be the external auditor and financial reporting controls.', text_vn: 'Ưu tiên của ủy ban kiểm toán nội bộ dường như là kiểm toán viên bên ngoài và kiểm soát báo cáo tài chính.' },
            { text_en: 'This is a rapid-paced, highly empowered organization and culture with a diverse employee population.', text_vn: 'Đây là một tổ chức và văn hóa có nhịp độ nhanh, được trao quyền cao với một dân số nhân viên đa dạng.' },
            { text_en: 'There is a lack of qualified IT auditors on staff or available for recruitment in the market.', text_vn: 'Thiếu kiểm toán viên CNTT có trình độ trong đội ngũ nhân viên hoặc sẵn có để tuyển dụng trên thị trường.', is_correct: true },
            { text_en: 'Approximately 40% of the annual audit plan is advisory engagements and management requests.', text_vn: 'Khoảng 40% kế hoạch kiểm toán hàng năm là các hợp đồng tư vấn và yêu cầu của ban quản lý.' }
        ],
        explanation_en: 'A lack of qualified IT auditors is a resource constraint that directly impacts the ability of the internal audit function to complete its plan, especially in a technology-focused company like an ISP. This represents a significant risk to achieving the 100% completion objective.',
        explanation_vn: 'Việc thiếu kiểm toán viên CNTT có trình độ là một hạn chế về nguồn lực ảnh hưởng trực tiếp đến khả năng hoàn thành kế hoạch của chức năng kiểm toán nội bộ, đặc biệt là trong một công ty tập trung vào công nghệ như một ISP. Điều này đại diện cho một rủi ro đáng kể đối với việc đạt được mục tiêu hoàn thành 100%.',
        citation: 'P3 Simulated Exam 1, Question 5'
    }
];

// Simulates fetching questions from Gemini.
export const getQuestions = async (unit: string, count: number): Promise<Question[]> => {
  console.log(`Fetching ${count} questions for unit: ${unit}`);
  
  // In a real app, this would be an API call to a backend that uses Gemini.
  // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  // const response = await ai.models.generateContent(...)
  
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = mockQuestions;
      if (unit !== 'all') {
        filtered = mockQuestions.filter(q => q.unit === unit);
      }
      
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      resolve(shuffled.slice(0, count));
    }, 500); // Simulate network delay
  });
};
