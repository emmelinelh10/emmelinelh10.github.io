const SKILLS = {
  cloud: [
    {
      name: 'AWS EC2',
      obj:  'Deploy and host Dataiku DSS on AWS EC2.',
      impl: 'Refactored the installation script to make the base image deployment more lightweight.',
      res:  'Reduced deployment time by 50%.'
    },
    {
      name: 'AWS S3',
      obj:  'Eliminate disk-space-related outages caused by EBS-based user data storage.',
      impl: 'Designed a per-working-group bucket model with lifecycle policies for data isolation and storage governance across 600+ users.',
      res:  'Eliminated disk-space outages and reduced storage cost by approximately ~70%.'
    },
    {
      name: 'AWS EKS',
      obj:  'Move Dataiku DSS compute workloads from local execution to containerised workloads on EKS.',
      impl: 'Eliminated and reduced local execution workloads by migrating them to run as containerised jobs on EKS.',
      res:  'Reduced CPU utilisation on AWS EC2 and reliance on backend execution by 90%.'
    },
    {
      name: 'AWS Bedrock',
      obj:  'Build autonomous AI agents for production application health checks.',
      impl: 'Developed autonomous agents within Dataiku Agent Hub using AWS Bedrock (Claude models) to perform health checks across multiple production applications.',
      res:  'Recognised with multiple awards at the company internal hackathon for innovation and operational impact.'
    },
    {
      name: 'AWS CloudFormation',
      obj:  'Provision and manage platform AWS resources using infrastructure-as-code.',
      impl: 'Config-driven CloudFormation stacks so the same code is reusable across deployment regions and stays in sync between dev and prod.',
      res:  'No config drift between environments, reusable across regions.'
    },
    {
      name: 'AWS Redshift',
      obj:  'Eliminate reliance on the master role for S3-to-Redshift data loading.',
      impl: 'Implemented IAM role chaining so Redshift could assume a scoped S3 access role for COPY operations, replacing the master role with a least-privilege alternative.',
      res:  'Removed master role dependency from the data loading pipeline, reducing blast radius of any credential compromise.'
    },
    {
      name: 'AWS CloudWatch',
      obj:  'Reduce breakglass access used to manually check disk breakdown of EBS and root volumes.',
      impl: 'Pushed disk utilisation metrics to CloudWatch using a cron job, then surfaced them in Grafana dashboards for visualisation — eliminating the need to log in to the instance for routine checks.',
      res:  'Eliminated ad-hoc breakglass usage for routine disk checks by 75-80%.'
    },
    {
      name: 'Argo Workflows',
      obj:  'GitOps continuous delivery for all Kubernetes platform resources.',
      impl: 'Re-engineered the Dataiku deployment pipeline using Argo Workflows.',
      res:  'Reduced deployment time by 50-75% with a full audit trail on every release.'
    },
  ],
  certs: [
    { name: '☁ AWS Cloud Practitioner', url: 'https://www.credly.com/badges/cf531f5d-0881-40ef-b431-2d4484e791f3/public_url' },
    { name: '◈ Dataiku Core Designer',  url: 'https://verify.skilljar.com/c/tf3cg728cxs8' },
    { name: '◈ Dataiku Developer',       url: 'https://verify.skilljar.com/c/udo8i56ihozd' },
  ]
};