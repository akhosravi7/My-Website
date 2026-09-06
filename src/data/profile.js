export const profile = {
  name: "Ali Khosravi",
  headline: "AI DevOps Lead · Pienso",
  tagline: "Kubernetes-based AI infrastructure by day — films and music by night.",
  location: "Flower Mound, Texas",
  intro:
    "AI DevOps Lead specializing in Kubernetes-based AI infrastructure, model serving, and automated deployment platforms. Georgia Tech CS grad, with a side of filmmaking and music under the ALK FILMS name.",
  linkedin: "https://www.linkedin.com/in/ali-khosravi-devops",
  soundcloud: "https://soundcloud.com/thebigtomat",
  email: "alikhosravi1000@gmail.com",
  youtube: "https://www.youtube.com/@ALIKFILMS1",
  education: {
    degree: "B.S. in Computer Science",
    school: "Georgia Institute of Technology",
    years: "2015–2019",
    gpa: "3.8 GPA",
  },
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "HashiCorp Certified: Terraform Associate",
    "Certified Kubernetes Administrator (CKA)",
  ],
  experience: [
    {
      title: "AI DevOps Lead",
      company: "Pienso",
      period: "Nov 2020 – Nov 2025",
      points: [
        "Deploy and operate vLLM clusters; configure open-source AI models for internal workflows.",
        "Build monitoring and observability across AI and app infrastructure (Prometheus, Grafana, Loki, OpenObserve).",
        "Implement company-wide Tailscale via Terraform, securing GitLab pipeline access to private servers and clusters.",
      ],
    },
    {
      title: "Senior DevOps Engineer",
      company: "Salucro",
      period: "Nov 2020 – Nov 2025",
      points: [
        "Lead CI/CD modernization by migrating complex Jenkins pipelines to GitLab.",
        "Develop reusable GitLab templates for microservice deployments.",
        "Centralize Terraform modules (security groups, ECS, VPCs); lead full Nexus migration.",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "ADP",
      period: "May 2017 – Nov 2020",
      points: [
        "Migrate microservices from on-prem to AWS EKS.",
        "Build end-to-end CI/CD pipelines using Jenkins, GitHub, and AWS CLI.",
      ],
    },
  ],
  focus: ["Kubernetes", "vLLM & Model Serving", "Terraform", "CI/CD", "Observability"],
};
