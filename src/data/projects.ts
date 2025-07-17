// src/data/projects.ts
export const projectsData = {
  Planning: [
    {
      title: "다대다 번개 모임 매칭 플랫폼, 청춘상회",
      description:
        "사이드 프로젝트  |  역할: 프로덕트 기획 및 UI∙UX 디자인  |  참여인원: 2인",
      file: "personal1.pdf",
      slug: "youth-matching-platform",
    },
    {
      title: "LG유플러스 고객 통합 관리 서비스",
      description:
        "공모전 프로젝트  |  주관: LG유플러스  |  상훈명: 대상  |  참여인원: 개인",
      file: "award1.pdf",
      slug: "lg-uplus-customer-management",
    },
    {
      title: "Visualized Artifical Personal training",
      description:
        "공모전 프로젝트  |  주관: 산업통상자원부  |  상훈명: 우수상  |  참여인원: 3인",
      file: "award2.pdf",
      slug: "visualized-personal-training",
    },
    {
      title: "ETC for Planning",
      description: "기타 교내 프로젝트  |  실험 계획∙DB설계∙UI개선",
      file: "etc.pdf",
      slug: "etc-planning",
    },
  ],
  "Data Analysis": [
    {
      title: "재가공 동영상 콘텐츠 선별 프로젝트",
      description: "교내 팀 프로젝트  |  데이터분석및활용  |  참여인원: 2명",
      file: "project1.pdf",
      slug: "video-content-selection",
    },
    {
      title: "텍스트마이닝 기반 MBTI별 노래 추천",
      description: "교내 팀 프로젝트  |  스마트AI시스템  |  참여인원: 3명",
      file: "project2.pdf",
      slug: "mbti-music-recommendation",
    },
  ],
  "Process Improvement": [
    {
      title: "프로세스 모델링 및 개선",
      description:
        "교내 팀 프로젝트  |  프로세스경영(5인)  |  시스템시뮬레이션(5인)",
      file: "project3.pdf",
      slug: "process-modeling-improvement",
    },
  ],
  Internship: [
    {
      title: "주식회사 비주얼캠프 Intership",
      description: "인턴십  |  기획/운영 지원 및 마케팅",
      file: "personal2.pdf",
      slug: "visualcamp-internship",
    },
  ],
} as const;

// 카테고리 목록
export const categories = [
  "All",
  "Planning",
  "Data Analysis",
  "Process Improvement",
  "Internship",
] as const;

// 유틸리티 함수들
export const getProjectsByCategory = (category: string) => {
  if (category === "All") {
    return Object.values(projectsData).flat();
  }
  return projectsData[category as keyof typeof projectsData] || [];
};

export const getAllProjects = () => {
  return Object.values(projectsData).flat();
};

export const getProjectBySlug = (slug: string) => {
  const allProjects = getAllProjects();
  return allProjects.find((project) => project.slug === slug);
};

export const getProjectByTitle = (title: string) => {
  const allProjects = getAllProjects();
  return allProjects.find((project) => project.title === title);
};

export const getAllSlugs = () => {
  return getAllProjects().map((project) => project.slug);
};

// 타입 정의
export type Project = {
  title: string;
  description: string;
  file: string;
  slug: string;
};

export type Category = (typeof categories)[number];
export type ProjectCategory = keyof typeof projectsData;
