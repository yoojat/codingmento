import { Link, type MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "../components/ui/button";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "../components/idea-card";
import { JobCard } from "../components/job-card";
import { TeamCard } from "../components/team-card";
import { BigHero } from "../components/big-hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div>
      <BigHero
        title="실시간 온라인 수업으로 코딩을 배워보세요!"
        smallTitle={["실시간 온라인 수업으로", "코딩을 배워보세요!"]}
        subtitle={[
          "전문 강사의 실전 중심 커리큘럼,",
          "수준별 맞춤 수업, 실시간 피드백까지.",
          "이제 집에서도 학원 이상의 퀄리티를 경험하세요.",
          "코딩을 처음 배우는 학생부터, 진로를 고민하는 청소년까지",
          "모두가 실력으로 증명할 수 있도록 돕는",
          "온라인 코딩 그룹 수업, 지금 시작하세요.",
        ]}
        imgUrl="/image.png"
        imgTitle="실시간 온라인 수업으로 코딩을 배워보세요!"
      />
    </div>
  );
}
