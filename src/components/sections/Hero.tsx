// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Instagram,
  Mail,
  Phone,
  Heart,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* CSS 변수를 활용한 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* 블루톤 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-cyan-50/10 dark:from-blue-950/10 dark:via-transparent dark:to-cyan-950/5" />

      {/* 은은한 패턴 배경 */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgb(var(--primary)/0.15)_1px,_transparent_0)] bg-[size:24px_24px]" />
      </div>

      {/* 큰 블러 원형 데코레이션 - CSS 변수 활용 */}
      <div className="absolute top-10 left-16 w-64 h-64 bg-primary/20 dark:bg-primary/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 right-20 w-48 h-48 bg-accent/15 dark:bg-accent/6 rounded-full blur-[80px]" />
      <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-primary/18 dark:bg-primary/7 rounded-full blur-[90px]" />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-accent/20 dark:bg-accent/8 rounded-full blur-[70px]" />
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary/15 dark:bg-primary/5 rounded-full blur-[60px]" />

      {/* 떠다니는 작은 요소들 - CSS 변수 활용 */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 left-1/4 w-3 h-3 bg-primary/60 rounded-full blur-[1px]"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/55 rounded-full blur-[1px]"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-primary/50 rounded-full blur-[1px]"
      />

      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 5 }}
        className="absolute top-3/4 right-1/5 w-2 h-2 bg-accent/50 rounded-full blur-[1px]"
      />

      {/* 기하학적 도형들 - CSS 변수 활용 */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute top-1/4 right-12 w-24 h-24 border-2 border-primary/30 rounded-full blur-[2px]"
      />

      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-1/3 left-12 w-20 h-20 border-2 border-accent/30 rounded-full blur-[2px]"
      />

      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 35, repeat: Infinity }}
        className="absolute top-1/5 left-1/3 w-16 h-16 border-2 border-primary/35 rounded-full blur-[2px]"
      />

      {/* 선형 데코레이션 - CSS 변수 활용 */}
      <div className="absolute top-40 left-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent blur-[1px]" />
      <div className="absolute bottom-40 right-1/2 w-0.5 h-20 bg-gradient-to-b from-transparent via-accent/40 to-transparent blur-[1px]" />

      {/* 별 모양들 - CSS 변수 활용 */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/5 left-1/5"
      >
        <div className="w-2 h-2 bg-primary/60 rounded-full relative blur-[1px]">
          <div className="absolute inset-0 w-2 h-2 bg-primary/60 rounded-full animate-ping blur-[1px]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/5 right-1/5"
      >
        <div className="w-1.5 h-1.5 bg-accent/55 rounded-full relative blur-[1px]">
          <div className="absolute inset-0 w-1.5 h-1.5 bg-accent/55 rounded-full animate-ping blur-[1px]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute top-2/3 left-1/6"
      >
        <div className="w-1 h-1 bg-primary/50 rounded-full relative blur-[1px]">
          <div className="absolute inset-0 w-1 h-1 bg-primary/50 rounded-full animate-ping blur-[1px]" />
        </div>
      </motion.div>

      {/* 추가 데코레이션 - CSS 변수 활용 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        className="absolute top-1/6 right-1/3 w-3 h-3 bg-accent/45 rounded-full blur-[2px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 4 }}
        className="absolute bottom-1/6 left-2/3 w-2.5 h-2.5 bg-primary/40 rounded-full blur-[2px]"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* 프로필 이미지 - CSS 변수 활용 */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* 사진 컨테이너 */}
            <div className="w-72 md:w-80 lg:w-[340px] h-[400px] md:h-[450px] lg:h-[500px] relative">
              {/* CSS 변수를 활용한 그림자 */}
              <div className="absolute -inset-1 bg-card rounded-2xl shadow-xl" />

              {/* 메인 이미지 */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card">
                <div className="w-full h-full flex items-end justify-center">
                  <Image
                    src="/photo2.png"
                    alt="관찰자 권석찬"
                    width={848}
                    height={1476}
                    className="h-full w-[90%] object-cover object-bottom"
                    priority
                  />
                </div>
              </div>

              {/* 귀여운 포인트 - CSS 변수 활용 */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-3 h-3 text-primary-foreground" />
              </motion.div>

              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-2 -left-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <Sparkles className="w-2.5 h-2.5 text-accent-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* 콘텐츠 */}
          <div className="flex-1 text-center lg:text-left">
            {/* CSS 변수를 활용한 배지 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-card rounded-full shadow-sm border border-border">
                <Heart className="w-3 h-3 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Customer Lover
                </span>
                <div className="w-1 h-1 bg-border rounded-full" />
                <span className="text-sm font-medium text-muted-foreground">
                  Data Strategist
                </span>
              </div>
            </motion.div>

            {/* CSS 변수를 활용한 타이틀 */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <div className="flex flex-col gap-3">
                <div className="text-foreground">관찰자 권석찬</div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl text-muted-foreground font-light"
                >
                  <span>고객을 지독하게 관찰하고, 만족시키겠습니다</span>
                </motion.div>
              </div>
            </motion.h1>

            {/* CSS 변수를 활용한 서브타이틀 */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg lg:max-w-none"
            >
              정성적・정량적 데이터를 기반으로 고객을 관찰하고,{" "}
              <br className="hidden md:block" />
              <span className="text-foreground font-medium">
                유의미한 성공 전략을 설계하겠습니다💫
              </span>
            </motion.p>

            {/* CSS 변수를 활용한 소셜 링크 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {[
                {
                  icon: Instagram,
                  href: "https://instagram.com/d5ritox_x",
                  label: "Instagram",
                  bgColor: "bg-pink-50 dark:bg-pink-900/20",
                  hoverColor: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
                  iconColor: "text-pink-600 dark:text-pink-400",
                },
                {
                  icon: Mail,
                  href: "mailto:kwonsc99@gmail.com",
                  label: "Email",
                  bgColor: "bg-secondary",
                  hoverColor: "hover:bg-secondary/80",
                  iconColor: "text-primary",
                },
                {
                  icon: Phone,
                  href: "tel:+82-10-8567-5197",
                  label: "Phone",
                  bgColor: "bg-secondary",
                  hoverColor: "hover:bg-secondary/80",
                  iconColor: "text-accent",
                },
              ].map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 flex items-center justify-center ${contact.bgColor} ${contact.hoverColor} rounded-xl transition-all duration-300 shadow-sm`}
                  aria-label={contact.label}
                >
                  <contact.icon className={`h-5 w-5 ${contact.iconColor}`} />
                </motion.a>
              ))}
            </motion.div>

            {/* CSS 변수를 활용한 스크롤 인디케이터 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground"
            >
              <span className="font-medium">더 알아보기</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center"
              >
                <ArrowDown className="h-3 w-3" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
