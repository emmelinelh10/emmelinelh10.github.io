const SKILLS = {
  cloud: [
    {
      name: 'AWS EC2',
      obj:  'Re-engineer the Dataiku deployment pipeline to reduce deployment time.',
      impl: 'Rebuilt the deployment pipeline on AWS EC2 using Argo Workflows and ArgoCD with GitOps-based delivery.',
      res:  'Reduced deployment time by 75%.'
    },
    {
      name: 'AWS S3',
      obj:  'Eliminate disk-space-related outages caused by EBS-based user data storage.',
      impl: 'Architected migration from AWS EBS to AWS S3; designed a per-working-group bucket model with lifecycle policies for data isolation and storage governance across 600+ users.',
      res:  'Eliminated disk-space outages with scalable, governed storage.'
    },
    {
      name: 'AWS EKS',
      obj:  'Run Dataiku DSS compute workloads on a managed Kubernetes cluster.',
      impl: 'Configured EKS node groups with autoscaling, integrated ArgoCD for GitOps delivery, and managed Helm chart releases for platform services.',
      res:  'Stable, zero-downtime platform deployments with consistent cluster state.'
    },
    {
      name: 'AWS ECR',
      obj:  'Host and manage container images for platform and workload services.',
      impl: 'Maintained private ECR repositories with lifecycle rules and cross-account pull permissions integrated with EKS node IAM roles.',
      res:  'Clean image registry with secure cross-account access.'
    },
    {
      name: 'AWS EBS',
      obj:  'Provide persistent block storage for stateful Dataiku workloads prior to S3 migration.',
      impl: 'Managed EBS volumes via EKS storage classes before leading the architectural migration to S3 to resolve recurring disk-space outages.',
      res:  'Migration eliminated a class of production incidents affecting the full 600+ user platform.'
    },
    {
      name: 'AWS Redshift',
      obj:  'Support analytical workloads for data science and finance teams on the platform.',
      impl: 'Configured cluster access, IAM integration for S3 Spectrum queries, and workload management queues for platform users.',
      res:  'Enabled self-serve analytics for quants and analysts with governed, auditable access.'
    },
    {
      name: 'AWS Bedrock',
      obj:  'Build autonomous AI agents for production application health checks.',
      impl: 'Developed autonomous agents within Dataiku Agent Hub using AWS Bedrock (Claude models) to perform health checks across multiple production applications.',
      res:  'Recognised with multiple awards at the company internal hackathon for innovation and operational impact.'
    },
    {
      name: 'AWS CloudFormation',
      obj:  'Infrastructure-as-code for provisioning and managing platform AWS resources.',
      impl: 'Authored stacks for EKS, IAM, and networking resources; integrated with CI pipelines for drift detection and reproducible provisioning.',
      res:  'Auditable, version-controlled infrastructure with full change history.'
    },
    {
      name: 'Kubernetes',
      obj:  'Container orchestration for all Dataiku DSS platform services on EKS.',
      impl: 'Managed RBAC, namespace isolation, custom resource definitions, and Helm-based releases across dev, staging, and prod environments.',
      res:  'Consistent, self-healing deployments with team-level access isolation.'
    },
    {
      name: 'ArgoCD',
      obj:  'GitOps continuous delivery for all Kubernetes platform resources.',
      impl: 'Re-engineered the Dataiku deployment pipeline using ArgoCD — declarative Git-synced app definitions with automated health checks and rollback on failure.',
      res:  'Reduced deployment time by 75% with a full audit trail on every release.'
    },
    {
      name: 'Argo Workflows',
      obj:  'Kubernetes-native workflow engine for orchestrating the Dataiku deployment pipeline.',
      impl: 'Built DAG-based workflows on EKS to replace manual deployment steps as part of the pipeline re-engineering initiative.',
      res:  'Deployment time cut by 75% with fully automated, reproducible pipeline runs.'
    },
    {
      name: 'Linux',
      obj:  'Primary operating environment for all day-to-day platform engineering work.',
      impl: 'Shell scripting for automation, cron scheduling, systemd service management, and log inspection for incident triage across production environments.',
      res:  'Core tooling for operating and maintaining the Dataiku platform infrastructure.'
    },
  ],
  languages: [
    { name: 'Python' },
    { name: 'Bash / Shell' },
    { name: 'Go' },
    { name: 'MATLAB' },
  ],
  platforms: [
    {
      name: 'Dataiku DSS',
      obj:  'Serve as core SME for Dataiku — accountable for end-to-end platform health for 600+ global users including traders, quants, and analysts.',
      impl: 'Manage platform infrastructure on EKS, govern project permissions, handle incident response, and built Python automation using Dataiku APIs for config-as-code and automated onboarding.',
      res:  'Reduced user-onboarding admin work by ~80%; platform reliably serves all production environments.'
    },
    {
      name: 'Grafana',
      obj:  'Improve observability of high-priority runstreams and platform infrastructure metrics.',
      impl: 'Developed Go-based Grafana templating for CloudWatch and Prometheus metrics; built dashboards visualising near real-time data ingestion rates with customised alert settings.',
      res:  'Cut alert noise by ~67%; reduced false alerts by 23% during internship, sharpening operational response times.'
    },
    {
      name: 'Prometheus',
      obj:  'Provide a metrics backend for platform observability alongside Grafana.',
      impl: 'Deployed via kube-prometheus-stack on EKS; configured scrape targets for node exporters and Dataiku application metrics feeding Grafana dashboards and Alertmanager rules.',
      res:  'Consistent metrics pipeline underpinning platform-wide observability and alerting.'
    },
    {
      name: 'Alertmanager',
      obj:  'Reduce alert noise and improve operational response times for the platform.',
      impl: 'Refactored Alertmanager routing trees, inhibition rules, and receiver integrations as part of the observability overhaul using Go-based Grafana templating.',
      res:  'Cut alert noise by ~67%, resulting in sharper and more actionable on-call notifications.'
    },
  ],
  certs: [
    { name: '☁ AWS Cloud Practitioner', url: 'https://www.credly.com/badges/cf531f5d-0881-40ef-b431-2d4484e791f3/public_url' },
    { name: '◈ Dataiku Core Designer',  url: 'https://verify.skilljar.com/c/tf3cg728cxs8' },
    { name: '◈ Dataiku Developer',       url: 'https://verify.skilljar.com/c/udo8i56ihozd' },
  ]
};