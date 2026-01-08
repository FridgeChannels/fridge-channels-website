"use client";

interface PilotStep {
  readonly id: string;
  readonly title: string;
  readonly body: readonly string[];
}

interface PilotFlowTimelineProps {
  steps: readonly PilotStep[];
  title?: string;
}

export function PilotFlowTimeline({ steps, title = "How a Pilot Works" }: PilotFlowTimelineProps) {
  return (
    <div className="w-full" style={{ backgroundColor: '#F7F7F4' }}>
      {/* 标题部分 */}
      <div className="text-center py-12">
        <h2 className="text-[48px] leading-[52.8px] tracking-[-1.44px] font-normal text-[#1a1a1a]">
          {title}
        </h2>
      </div>

      {/* 大间距 */}
      <div className="h-16"></div>

      {/* 主要内容区域 - 优化后的流线型布局 */}
      <div className="cs-hero_road-wrap relative w-full min-h-[700px] pb-16 max-w-6xl mx-auto">
        {/* 平板端隐藏元素 */}
        <div className="cs-hero_road-tablet hidden"></div>
        
        {/* SVG 背景路径 - 从左上到右下的规律流线型 */}
        <svg
          className="cs-hero_roadmap-img absolute inset-0 w-full h-full"
          viewBox="0 0 1000 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 主流线：从左上到右下的S形曲线，确保规律性 */}
          <path
            d="M 80 80 Q 200 60 250 150 Q 300 240 180 280 Q 60 320 400 380 Q 740 440 600 520 Q 460 600 800 620 Q 1140 640 920 680"
            stroke="#A855F7"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          {/* 辅助发光效果 */}
          <path
            d="M 80 80 Q 200 60 250 150 Q 300 240 180 280 Q 60 320 400 380 Q 740 440 600 520 Q 460 600 800 620 Q 1140 640 920 680"
            stroke="#A855F7"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.2"
          />
        </svg>

        {/* 步骤内容 - 使用 CSS 类定位 */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`cs-hero_road-content step-${index + 1} absolute`}
          >
            <div className="cs-hero_road-c-top">
              <h3 className="cs-hero_road-heading text-[20px] font-semibold leading-[22px] text-[#1a1a1a] mb-2">
                {step.title}
              </h3>
            </div>
            <div>
              {step.body.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="cs-hero-road-c text-[14px] font-medium leading-[18px] text-[#1a1a1a]/80 mb-1"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* 移动端布局 */}
        <div className="md:hidden relative z-10 max-w-md mx-auto px-6 space-y-6 mt-8">
          {steps.map((step) => (
            <div key={`mobile-${step.id}`} className="space-y-2">
              <h3 className="text-[18px] font-semibold leading-[20px] text-[#1a1a1a]">
                {step.title}
              </h3>
              <div className="space-y-1">
                {step.body.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="text-[13px] font-medium leading-[16px] text-[#1a1a1a]/70"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cs-hero_road-wrap {
          position: relative;
        }

        .cs-hero_road-content {
          grid-column-gap: .5rem;
          grid-row-gap: .5rem;
          flex-flow: column;
          max-width: 18.5rem;
          display: flex;
          position: absolute;
          inset: 0% auto auto 0%;
          z-index: 10;
        }

        /* 步骤定位 - 根据红色标注图精确调整，使内容块紧贴线条 */
        
        /* 左侧步骤 (1, 3, 5, 7) - 紧贴线条左侧，内容块右边缘对齐线条 */
        .cs-hero_road-content.step-1 {
          inset: 9% auto auto 16%;
          transform: translate(-100%, 0%);
          text-align: left;
        }

        .cs-hero_road-content.step-3 {
          inset: 36% auto auto 20%;
          transform: translate(-100%, 0%);
          text-align: left;
        }

        .cs-hero_road-content.step-5 {
          inset: 62% auto auto 62%;
          transform: translate(-100%, 0%);
          text-align: left;
        }

        .cs-hero_road-content.step-7 {
          inset: 92% auto auto 84%;
          transform: translate(-100%, 0%);
          text-align: left;
        }

        /* 右侧步骤 (2, 4, 6, 8) - 紧贴线条右侧，内容块左边缘对齐线条 */
        .cs-hero_road-content.step-2 {
          inset: 18% 55% auto auto;
          transform: translate(0%, 0%);
          text-align: right;
        }

        .cs-hero_road-content.step-4 {
          inset: 42% 50% auto auto;
          transform: translate(0%, 0%);
          text-align: right;
        }

        .cs-hero_road-content.step-6 {
          inset: 72% 18% auto auto;
          transform: translate(0%, 0%);
          text-align: right;
        }

        .cs-hero_road-content.step-8 {
          inset: 100% 0% auto auto;
          transform: translate(0%, 0%);
          text-align: right;
        }

        /* 移动端隐藏桌面端步骤 */
        @media (max-width: 768px) {
          .cs-hero_road-content {
            display: none;
          }
        }

        /* 桌面端显示步骤 */
        @media (min-width: 769px) {
          .cs-hero_road-content {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
