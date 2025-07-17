// // src/data/projects.ts
// export const projectsData = [
//   {
//     id: 1,
//     title: "청춘상회",
//     description: "웹 기반 다대다 즉석 매칭 서비스",
//     category: "Planning",
//     thumbnail: "/thumbnails/thumbnail1.png",
//     technologies: ["Figma", "Draw.io", "Javascript"],
//     liveUrl: "https://youth-adults.vercel.app/",
//     githubUrl: "#",
//     slug: "customer-segmentation",
//     // 상세 페이지용 추가 정보
//     fullDescription:
//       "이 프로젝트는 기업의 고객 데이터를 분석하여 효과적인 마케팅 전략을 수립하는 것을 목표로 합니다. 머신러닝 알고리즘을 활용하여 고객을 세분화하고, 각 세그먼트별 특성을 파악하여 개인화된 마케팅 캠페인을 제안합니다.",
//     duration: "2024.12 - ",
//     role: "서비스 기획, ui/ux 디자인",
//     teamSize: "2명",
//     challenges: [
//       "대용량 고객 데이터 처리 및 전처리",
//       "최적의 클러스터링 알고리즘 선택",
//       "세그먼트별 마케팅 전략 수립",
//     ],
//     results: [
//       "고객 세분화 정확도 85% 달성",
//       "마케팅 ROI 30% 향상",
//       "개인화 캠페인 클릭률 25% 증가",
//     ],
//     pdfUrl: "/personal1.pdf",
//     images: [
//       "/projects/images/customer-segmentation-1.png",
//       "/projects/images/customer-segmentation-2.png",
//       "/projects/images/customer-segmentation-3.png",
//     ],
//   },
//   {
//     id: 2,
//     title: "이스타항공 온라인 프로모션",
//     description: "기업 네트워크 인프라 분석 및 성능 개선 솔루션 개발",
//     category: "Marketing",
//     thumbnail: "/projects/thumbnails/project2.png",
//     technologies: [
//       "Network Analysis",
//       "Performance Monitoring",
//       "Optimization",
//     ],
//     liveUrl: "#",
//     githubUrl: "#",
//     slug: "network-optimization",
//     fullDescription:
//       "이스타항공과 연계하여 항공 산업 현장의 실무를 체험하고, 온라인 프로모션 마케팅 전략을 수립하는 프로젝트입니다. 실제 항공사 마케팅 담당자들과 협업하며 고객의 니즈를 파악하고, 타겟 고객층에 효과적으로 도달할 수 있는 프로모션 아이디어를 발굴하는 데 중점을 두었습니다. 이를 통해 항공사 브랜드 인지도 향상과 고객 참여 증대를 목표로 하였습니다.",
//     duration: "2023.09 - 2024.01",
//     role: "시스템 분석가",
//     teamSize: "3명",
//     challenges: [
//       "항공 산업의 특수성과 경쟁이 치열한 시장 환경 속에서 고객에게 매력적이면서도 차별화된 프로모션을 기획하는 것이 어려웠습니다. 특히, 제한된 예산과 시간 내에 효과적인 마케팅 전략을 도출해야 했으며, 타겟 고객의 다양한 요구와 행동 패턴을 정확히 분석하고 반영하는 데 어려움이 있었습니다. 또한, 현업자들과의 협업 과정에서 실무 경험 부족으로 커뮤니케이션과 업무 조율에도 도전이 있었습니다.",
//     ],
//     results: [],
//     pdfUrl: "/projects/pdfs/network-optimization.pdf",
//     images: [
//       "/projects/images/network-optimization-1.png",
//       "/projects/images/network-optimization-2.png",
//       "/projects/images/network-optimization-3.png",
//     ],
//   },
//   {
//     id: 3,
//     title: "마케팅 캠페인 ROI 분석",
//     description: "다채널 마케팅 캠페인의 효과 측정 및 ROI 분석 대시보드",
//     category: "Marketing",
//     thumbnail: "/projects/thumbnails/project3.png",
//     technologies: ["Google Analytics", "Power BI", "SQL", "A/B Testing"],
//     liveUrl: "#",
//     githubUrl: "#",
//     slug: "marketing-roi-analysis",
//     fullDescription:
//       "다양한 마케팅 채널에서 진행되는 캠페인들의 효과를 통합적으로 분석하고 ROI를 측정할 수 있는 대시보드를 개발했습니다. A/B 테스트를 통해 최적의 마케팅 전략을 도출하고 데이터 기반 의사결정을 지원합니다.",
//     duration: "2023.12 - 2024.03",
//     role: "마케팅 분석가",
//     teamSize: "5명",
//     challenges: [
//       "다채널 데이터 통합 및 정규화",
//       "실시간 ROI 계산 로직 구현",
//       "시각적 대시보드 설계",
//     ],
//     results: [
//       "마케팅 효율성 35% 향상",
//       "캠페인 계획 시간 50% 단축",
//       "데이터 기반 의사결정 정착",
//     ],
//     pdfUrl: "/projects/pdfs/marketing-roi-analysis.pdf",
//     images: [
//       "/projects/images/marketing-roi-1.png",
//       "/projects/images/marketing-roi-2.png",
//       "/projects/images/marketing-roi-3.png",
//     ],
//   },
//   {
//     id: 4,
//     title: "사업 계획 수립 도구",
//     description: "데이터 기반 의사결정을 위한 사업 계획 및 예측 모델링",
//     category: "Planning",
//     thumbnail: "/projects/thumbnails/project4.png",
//     technologies: ["Excel VBA", "Financial Modeling", "Forecasting"],
//     liveUrl: "#",
//     githubUrl: "#",
//     slug: "business-planning-tool",
//     fullDescription:
//       "기업의 사업 계획 수립 과정을 체계화하고 데이터 기반 예측 모델을 통해 보다 정확한 비즈니스 전략을 수립할 수 있는 도구를 개발했습니다. 재무 모델링과 시나리오 분석을 통해 리스크를 최소화합니다.",
//     duration: "2023.06 - 2023.11",
//     role: "비즈니스 분석가",
//     teamSize: "4명",
//     challenges: [
//       "복잡한 재무 모델 설계",
//       "다양한 시나리오 분석 구현",
//       "사용자 친화적 인터페이스 개발",
//     ],
//     results: [
//       "계획 수립 시간 60% 단축",
//       "예측 정확도 45% 향상",
//       "의사결정 속도 40% 개선",
//     ],
//     pdfUrl: "/projects/pdfs/business-planning-tool.pdf",
//     images: [
//       "/projects/images/business-planning-1.png",
//       "/projects/images/business-planning-2.png",
//       "/projects/images/business-planning-3.png",
//     ],
//   },
//   {
//     id: 5,
//     title: "공급망 최적화 시스템",
//     description: "실시간 데이터를 활용한 공급망 효율성 개선 솔루션",
//     category: "Process Innovation",
//     thumbnail: "/projects/thumbnails/project5.png",
//     technologies: ["Python", "Optimization", "Real-time Analytics"],
//     liveUrl: "#",
//     githubUrl: "#",
//     slug: "supply-chain-optimization",
//     fullDescription:
//       "공급망 전체의 효율성을 극대화하기 위해 실시간 데이터 분석과 최적화 알고리즘을 활용한 시스템을 구축했습니다. 재고 관리, 배송 최적화, 수요 예측을 통합하여 운영 효율성을 크게 개선했습니다.",
//     duration: "2024.01 - 2024.05",
//     role: "공급망 분석가",
//     teamSize: "6명",
//     challenges: [
//       "복잡한 공급망 네트워크 모델링",
//       "실시간 데이터 처리 및 분석",
//       "다양한 제약 조건 최적화",
//     ],
//     results: [
//       "물류비용 30% 절감",
//       "재고 회전율 50% 향상",
//       "배송 시간 25% 단축",
//     ],
//     pdfUrl: "/projects/pdfs/supply-chain-optimization.pdf",
//     images: [
//       "/projects/images/supply-chain-1.png",
//       "/projects/images/supply-chain-2.png",
//       "/projects/images/supply-chain-3.png",
//     ],
//   },
//   {
//     id: 6,
//     title: "소셜 미디어 분석 플랫폼",
//     description: "브랜드 인지도 및 고객 감정 분석을 위한 소셜 미디어 모니터링",
//     category: "Marketing",
//     thumbnail: "/projects/thumbnails/project6.png",
//     technologies: ["NLP", "Sentiment Analysis", "API Integration"],
//     liveUrl: "#",
//     githubUrl: "#",
//     slug: "social-media-analytics",
//     fullDescription:
//       "다양한 소셜 미디어 플랫폼에서 브랜드 관련 데이터를 수집하고 자연어 처리 기술을 활용하여 고객의 감정과 의견을 분석하는 플랫폼을 개발했습니다. 실시간 모니터링을 통해 브랜드 인지도 변화를 추적합니다.",
//     duration: "2023.08 - 2023.12",
//     role: "데이터 사이언티스트",
//     teamSize: "4명",
//     challenges: [
//       "다양한 소셜 미디어 API 통합",
//       "자연어 처리 모델 최적화",
//       "대용량 텍스트 데이터 처리",
//     ],
//     results: [
//       "브랜드 모니터링 효율성 80% 향상",
//       "감정 분석 정확도 92% 달성",
//       "마케팅 대응 시간 70% 단축",
//     ],
//     pdfUrl: "/projects/pdfs/social-media-analytics.pdf",
//     images: [
//       "/projects/images/social-media-1.png",
//       "/projects/images/social-media-2.png",
//       "/projects/images/social-media-3.png",
//     ],
//   },
// ];

// // 카테고리 목록
// export const categories = [
//   "All",
//   "Planning",
//   "Marketing",
//   "Data Analysis",
//   "Process Innovation",
// ] as const;

// // 유틸리티 함수들
// export const getProjectBySlug = (slug: string) => {
//   return projectsData.find((project) => project.slug === slug);
// };

// export const getProjectsByCategory = (category: string) => {
//   if (category === "All") return projectsData;
//   return projectsData.filter((project) => project.category === category);
// };

// export const getAllSlugs = () => {
//   return projectsData.map((project) => project.slug);
// };

// // 타입 정의
// export type Project = (typeof projectsData)[0];
// export type Category = (typeof categories)[number];
