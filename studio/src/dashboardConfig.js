export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a0bb08f7ea07095340c981",
                  title: "Sanity Studio",
                  name: "tallyho-sanity-gatsby-studio",
                  apiId: "223148d8-565d-424f-884a-e01fd461a921",
                },
                {
                  buildHookId: "62a0bb086042ff064dee1be5",
                  title: "Blog Website",
                  name: "tallyho-sanity-gatsby",
                  apiId: "42864ab9-9183-42a7-aabd-41deb9a817b9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jackoliverharris/tallyho-sanity-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://tallyho-sanity-gatsby.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
