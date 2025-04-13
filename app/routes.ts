import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("courses", [
    index("features/courses/pages/courses-page.tsx"),
    route("/python-basic", "features/courses/pages/python-basic-page.tsx"),
    route(
      "/python-intermediate",
      "features/courses/pages/python-intermediate-page.tsx"
    ),
    route(
      "/data-analysis-and-machine-learning",
      "features/courses/pages/data-analysis-and-machine-learning-page.tsx"
    ),
  ]),
  route("about", "features/about/pages/about-page.tsx"),
  route("register", "features/register/pages/register-page.tsx"),
  route("experience", "features/experience/pages/experience-page.tsx"),
  route("reviews", "features/reviews/pages/reviews-page.tsx"),
  route("free-trial", "features/free-trial/pages/free-trial-page.tsx"),

  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    ...prefix("leaderboards", [
      index("features/products/pages/leaderboard-page.tsx"),
      route(
        "/yearly/:year",
        "features/products/pages/yearly-leaderboard-page.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/pages/monthly-leaderboard-page.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/pages/daily-leaderboard-page.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/pages/weekly-leaderboard-page.tsx"
      ),
      route(
        "/:period",
        "features/products/pages/leaderboards-redirection-page.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:category", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirect-page.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
        ]),
      ]),
    ]),
    ...prefix("/ideas", [
      index("features/ideas/pages/ideas-page.tsx"),
      route("/:ideaId", "features/ideas/pages/idea-page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
