// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, ExternalLink } from "lucide-react";
import { categories, getProjectsByCategory } from "@/data/projects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = getProjectsByCategory(activeFilter);

  // 카테고리별 컬러 그라데이션
  const getCategoryGradient = (category: string) => {
    const gradients = {
      Planning: "from-purple-500 to-pink-500",
      "Data Analysis": "from-blue-500 to-cyan-500",
      "Process Improvement": "from-green-500 to-teal-500",
      Internship: "from-orange-500 to-red-500",
    };
    return (
      gradients[category as keyof typeof gradients] ||
      "from-gray-500 to-gray-600"
    );
  };

  // 프로젝트의 카테고리 찾기
  const getProjectCategory = (project: any) => {
    const projectsData = {
      Planning: [
        "다대다 번개 모임 매칭 플랫폼, 청춘상회",
        "LG유플러스 고객 통합 관리 서비스",
        "Visualized Artifical Personal training",
        "ETC for Planning",
      ],
      "Data Analysis": [
        "재가공 동영상 콘텐츠 선별 프로젝트",
        "텍스트마이닝 기반 MBTI별 노래 추천",
      ],
      "Process Improvement": ["프로세스 모델링 및 개선"],
      Internship: ["주식회사 비주얼캠프 Intership"],
    };

    for (const [category, titles] of Object.entries(projectsData)) {
      if (titles.includes(project.title)) {
        return category;
      }
    }
    return "Planning"; // 기본값
  };

  const openPDF = (file: string) => {
    window.open(`/pdfs/${file}`, "_blank");
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            다양한 도메인에서 데이터 기반 솔루션을 통해 비즈니스 가치를 창출한
            프로젝트들입니다.
          </p>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full border transition-all ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const projectCategory = getProjectCategory(project);

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => openPDF(project.file)}
              >
                {/* 트렌디한 그라데이션 헤더 */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${getCategoryGradient(
                    projectCategory
                  )} overflow-hidden`}
                >
                  {/* 장식적인 패턴 */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/15 rounded-full blur-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                  </div>

                  {/* 파일 아이콘 */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <FileText className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* 카테고리 배지 */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {projectCategory}
                    </span>
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* PDF 열기 버튼 */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      클릭하여 자세히 보기
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 더 많은 프로젝트 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            더 많은 프로젝트 보기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
