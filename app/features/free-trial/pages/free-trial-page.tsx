import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import type { Route } from "./+types/free-trial-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "무료 체험 신청 | 코딩멘토" },
    {
      name: "description",
      content: "코딩멘토의 실시간 온라인 수업을 무료로 체험해보세요",
    },
  ];
};

export function action({ request }: Route.ActionArgs) {
  // Add form submission logic
  return {};
}

export default function FreeTrialPage({ actionData }: Route.ComponentProps) {
  return (
    <div>
      <Hero
        title="무료 체험 신청"
        subtitle="코딩멘토의 실시간 온라인 수업을 무료로 체험해보세요"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto p-8">
        <div className="space-y-5">
          <InputPair
            label="이름"
            description="실명을 입력해주세요"
            id="name"
            name="name"
            type="text"
            required
            placeholder="이름을 입력해주세요"
          />
          <InputPair
            label="이메일"
            description="연락 가능한 이메일을 입력해주세요"
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@email.com"
          />
          <InputPair
            label="연락처"
            description="연락 가능한 전화번호를 입력해주세요"
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="010-0000-0000"
          />
          <SelectPair
            label="연령대"
            description="연령대를 선택해주세요"
            name="ageGroup"
            required
            placeholder="연령대 선택"
            options={[
              { label: "초등학생", value: "elementary" },
              { label: "중학생", value: "middle" },
              { label: "고등학생", value: "high" },
              { label: "대학생", value: "university" },
              { label: "성인", value: "adult" },
            ]}
          />
        </div>
        <div className="space-y-5">
          <SelectPair
            label="프로그래밍 경험"
            description="프로그래밍 경험 여부를 선택해주세요"
            name="experience"
            required
            placeholder="경험 선택"
            options={[
              { label: "없음", value: "none" },
              { label: "기초 수준", value: "basic" },
              { label: "중급 수준", value: "intermediate" },
              { label: "고급 수준", value: "advanced" },
            ]}
          />
          <SelectPair
            label="관심 분야"
            description="관심 있는 프로그래밍 분야를 선택해주세요"
            name="interest"
            required
            placeholder="관심 분야 선택"
            options={[
              { label: "파이썬 기초", value: "python_basic" },
              { label: "파이썬 중급", value: "python_intermediate" },
              { label: "파이썬 고급", value: "python_advanced" },
              { label: "c언어 기초", value: "c_basic" },
              { label: "c언어 중급", value: "c_intermediate" },
              { label: "c언어 고급", value: "c_advanced" },
              { label: "데이터 분석", value: "data_analysis" },
              { label: "인공지능/머신러닝", value: "ai" },
              { label: "게임 개발", value: "game" },
              { label: "정보올림피아드 준비", value: "ioi_preparation" },
              { label: "자바 기초", value: "java_basic" },
              { label: "자바 중급", value: "java_intermediate" },
              { label: "자바 고급", value: "java_advanced" },
              { label: "웹 개발", value: "web" },
              { label: "기타", value: "etc" },
            ]}
          />
          <SelectPair
            label="선호 수업 시간"
            description="선호하는 수업 시간을 선택해주세요"
            name="preferredTime"
            required
            placeholder="시간 선택"
            options={[
              { label: "평일 오전", value: "weekday_morning" },
              { label: "평일 오후", value: "weekday_afternoon" },
              { label: "평일 저녁", value: "weekday_evening" },
              { label: "주말 오전", value: "weekend_morning" },
              { label: "주말 오후", value: "weekend_afternoon" },
            ]}
          />
          <InputPair
            textArea
            label="추가 메시지"
            description="추가로 전하고 싶은 메시지가 있다면 입력해주세요"
            id="message"
            name="message"
            placeholder="메시지를 입력해주세요"
          />
        </div>
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            무료 체험 신청하기
          </button>
        </div>
      </Form>
    </div>
  );
}
