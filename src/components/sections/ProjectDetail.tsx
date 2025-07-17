// src/components/sections/ProjectDetail.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Download,
  Calendar,
  Users,
  Award,
  FileText,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// PDFViewer를 동적으로 임포트 (SSR 비활성화)
const PDFViewer = dynamic(() => import("@/components/ui/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-card border border-border rounded-xl">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      <span className="ml-2 text-muted-foreground">PDF 뷰어 로딩 중...</span>
    </div>
  ),
});

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    thumbnail: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    slug: string;
    duration: string;
    role: string;
    teamSize: string;
    challenges: string[];
    results: string[];
    pdfUrl: string;
    images: string[];
  };
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      {/* 헤더 */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />

        {/* 뒤로가기 버튼 */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              프로젝트 목록으로
            </motion.button>
          </Link>
        </div>

        {/* 프로젝트 제목 */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 왼쪽: 프로젝트 정보 */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                프로젝트 개요
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* 도전 과제 */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                주요 도전 과제
              </h3>
              <ul className="space-y-2 mb-8">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>

              {/* 결과 */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                주요 성과
              </h3>
              <ul className="space-y-2 mb-8">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>

              {/* PDF 뷰어 섹션 */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                자세히 보기
              </h3>
              <div className="mb-8">
                {!showPDF ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-xl p-8 text-center cursor-pointer"
                    onClick={() => setShowPDF(true)}
                  >
                    <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      프로젝트 상세 자료
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      클릭하여 PDF 문서를 웹에서 바로 확인하세요
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Eye className="h-4 w-4" />
                      <span className="font-medium">문서 보기</span>
                    </div>
                  </motion.div>
                ) : (
                  <PDFViewer
                    fileUrl={project.pdfUrl}
                    title={`${project.title} - 상세 자료`}
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* 오른쪽: 프로젝트 상세 정보 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-8"
            >
              {/* 프로젝트 정보 카드 */}
              <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  프로젝트 정보
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">기간</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">팀 규모</p>
                      <p className="font-medium">{project.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">역할</p>
                      <p className="font-medium">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 기술 스택 */}
              <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  기술 스택
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="space-y-3">
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  라이브 데모 보기
                </motion.a>

                <motion.a
                  href={project.pdfUrl}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-2 w-full border border-border text-foreground py-3 rounded-lg font-medium hover:bg-secondary/50 transition-colors"
                  download
                >
                  <Download className="h-4 w-4" />
                  PDF 다운로드
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
