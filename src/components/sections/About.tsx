// src/components/sections/About.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ArrowRight,
  Code,
  Palette,
  GitBranch,
  Database,
  FileText,
  Monitor,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 실제 데이터
  const aboutMeData = {
    education: [
      { date: "2018.01", content: "상원고등학교 졸업" },
      { date: "2020.10", content: "대한민국 육군 병장 만기전역" },
      { date: "2025.02", content: "숭실대학교 산업정보시스템공학과 졸업" },
    ],
    awards: [
      {
        date: "2021.09",
        content: "제9회 산업통상자원부 공공데이터 활용\nBI 공모전 우수상",
      },
      { date: "2022.11", content: "대한산업공학회 홍보 영상 공모전 최우수상" },
      {
        date: "2022.12",
        content: "제1회 LG유플러스 고객 가치 아이디어 공모전 대상",
      },
    ],
    certificate: [
      { date: "2024.06", content: "ADsP" },
      { date: "2024.06", content: "Google Analytics" },
      {
        date: "2021.12",
        content: "ACP Digital Video using Adobe Premiere Pro 2020",
      },
    ],
    internship: [
      {
        date: "2023.02 - 2023.11",
        content: "(주)비주얼캠프\nSeeso Edu 기획/운영 지원",
      },
    ],
    language: [
      { label: "어학", content: "Toeic Speaking IH (150)" },
      { label: "학점", content: "3.87/4.5" },
      { label: "봉사", content: "228시간" },
    ],
    activities: [
      "숭실대 산업정보시스템공학과\n30대 학생회 임원",
      "숭실대 흑인 음악동아리 다피스",
      "Code Club SW 교육봉사단",
      "CRM&디지털마케팅 직무부트캠프 수료",
      "대한산업공학회 산하 학술동아리\nFIELD 14기 기획국원",
      "청년서포터즈 6기",
    ],
    // 기술 스택 데이터
    techStack: [
      {
        category: "Programming",
        icon: Code,
        skills: [
          { name: "Python", level: "중" },
          { name: "R", level: "중" },
          { name: "JavaScript", level: "중" },
        ],
      },
      {
        category: "Design",
        icon: Palette,
        skills: [{ name: "Figma", level: "상" }],
      },
      {
        category: "Process",
        icon: GitBranch,
        skills: [{ name: "Draw.io", level: "중" }],
      },
      {
        category: "Database",
        icon: Database,
        skills: [{ name: "MySQL", level: "중" }],
      },
      {
        category: "Office",
        icon: FileText,
        skills: [
          { name: "Excel", level: "중" },
          { name: "PowerPoint", level: "중" },
        ],
      },
    ],
  };

  // 줄바꿈 처리 함수
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => <div key={i}>{line}</div>);
  };

  // 레벨별 스타일 함수
  const getLevelStyle = (level: string) => {
    switch (level) {
      case "상":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "중":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "하":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            데이터로 세상을 <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              더 나은 곳으로
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            산업공학과 데이터 분석의 만남으로 비즈니스 가치를 창출합니다
          </p>
        </motion.div>

        {/* 메인 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* 교육 & 경력 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Journey
              </h3>

              <div className="space-y-6">
                {/* 교육 */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    Education
                    <div className="h-px bg-border flex-1" />
                  </h4>
                  <div className="space-y-3">
                    {aboutMeData.education.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between group"
                      >
                        <div className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {renderContent(item.content)}
                        </div>
                        <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                          {item.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 인턴십 */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    Experience
                    <div className="h-px bg-border flex-1" />
                  </h4>
                  <div className="flex items-start justify-between group">
                    <div className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {renderContent(aboutMeData.internship[0].content)}
                    </div>
                    <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                      {aboutMeData.internship[0].date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 성과 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Achievements
              </h3>

              <div className="space-y-6">
                {aboutMeData.awards.map((award, idx) => (
                  <motion.div key={idx} whileHover={{ x: 5 }} className="group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <div className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                          {renderContent(award.content)}
                        </div>
                        <span className="text-sm text-primary font-medium">
                          {award.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 스킬 & 자격증 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Skills
              </h3>

              <div className="space-y-6">
                {/* 자격증 */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    Certificates
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutMeData.certificate.map((cert, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {cert.content}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 기타 성과 - 컴팩트 버전 */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    Stats
                  </h4>
                  <div className="space-y-3">
                    {aboutMeData.language.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-background/30 transition-colors"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <div className="text-sm font-semibold text-foreground">
                          {renderContent(item.content)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 활동 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Activities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {aboutMeData.activities.map((activity, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-background/50 border border-border/30 rounded-2xl p-4 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {renderContent(activity)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 기술 스택 - 컴팩트 버전 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Monitor className="h-4 w-4" />
              Tech Stack
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {aboutMeData.techStack.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="bg-background/50 border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      {category.category}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-xs text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${getLevelStyle(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
