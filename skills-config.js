const SKILLS = {
  cloud: [
    {
      name: 'AWS EC2',
      obj:  'Deploy and host Dataiku DSS on AWS EC2.',
      impl: 'Refactored the installation script to make the base image deployment more lightweight.',
      metrics: [
        { type: 'time', val: '50%', lbl: 'Faster deployments' }
      ]
    },
    {
      name: 'AWS S3',
      obj:  'Eliminate disk-space-related outages caused by EBS-based user data storage.',
      impl: 'Designed a per-working-group bucket model with lifecycle policies for data isolation and storage governance across 600+ users.',
      metrics: [
        { type: 'money',  val: '~70%', lbl: 'Cost reduction' },
        { type: 'outage', val: '0',    lbl: 'Disk outages'   }
      ]
    },
    {
      name: 'AWS EKS',
      obj:  'Move Dataiku DSS compute workloads from local execution to containerised workloads on EKS.',
      impl: 'Eliminated and reduced local execution workloads by migrating them to run as containerised jobs on EKS.',
      metrics: [
        { type: 'perf', val: '90%', lbl: 'CPU reduced'       },
        { type: 'time', val: '0',   lbl: 'Downtime'          }
      ]
    },
    {
      name: 'AWS ECR',
      obj:  'Host and manage container images for platform and workload services.',
      impl: 'Maintained private ECR repositories with lifecycle rules and cross-account pull permissions integrated with EKS node IAM roles.',
      metrics: [
        { type: 'outage', val: '0', lbl: 'Permission incidents' }
      ]
    },
    {
      name: 'AWS EBS',
      obj:  'Provide persistent block storage for stateful Dataiku workloads prior to S3 migration.',
      impl: 'Managed EBS volumes via EKS storage classes before leading the architectural migration to S3 to resolve recurring disk-space outages.',
      metrics: [
        { type: 'outage', val: '0', lbl: 'Disk outages post-migration' }
      ]
    },
    {
      name: 'AWS Redshift',
      obj:  'Eliminate reliance on the master role for S3-to-Redshift data loading.',
      impl: 'Implemented IAM role chaining so Redshift could assume a scoped S3 access role for COPY operations, replacing the master role with a least-privilege alternative.',
      metrics: [
        { type: 'outage', val: '0', lbl: 'Master role exposure' }
      ]
    },
    {
      name: 'AWS Bedrock',
      obj:  'Build autonomous AI agents for production application health checks.',
      impl: 'Developed autonomous agents within Dataiku Agent Hub using AWS Bedrock (Claude models) to perform health checks across multiple production applications.',
      metrics: [
        { type: 'perf', val: '2x', lbl: 'Hackathon awards' }
      ]
    },
    {
      name: 'AWS CloudFormation',
      obj:  'Provision and manage platform AWS resources using infrastructure-as-code.',
      impl: 'Config-driven CloudFormation stacks so the same code is reusable across deployment regions and stays in sync between dev and prod.',
      metrics: [
        { type: 'outage', val: '0', lbl: 'Config drift between envs' }
      ]
    },
    {
      name: 'AWS CloudWatch',
      obj:  'Reduce breakglass access used to manually check disk breakdown of EBS and root volumes.',
      impl: 'Pushed disk utilisation metrics to CloudWatch using a cron job, then surfaced them in Grafana dashboards for visualisation.',
      metrics: [
        { type: 'time', val: '75–80%', lbl: 'Breakglass usage reduced' }
      ]
    },
    {
      name: 'Kubernetes',
      obj:  'Container orchestration for all Dataiku DSS platform services on EKS.',
      impl: 'Managed RBAC, namespace isolation, custom resource definitions, and Helm-based releases across dev, staging, and prod environments.',
      metrics: [
        { type: 'time', val: '0', lbl: 'Downtime' }
      ]
    },
    {
      name: 'ArgoCD',
      obj:  'GitOps continuous delivery for all Kubernetes platform resources.',
      impl: 'Re-engineered the Dataiku deployment pipeline using ArgoCD — declarative Git-synced app definitions with automated health checks and rollback on failure.',
      metrics: [
        { type: 'time', val: '75%', lbl: 'Deployment time cut' }
      ]
    },
    {
      name: 'Argo Workflows',
      obj:  'Kubernetes-native workflow engine for orchestrating the Dataiku deployment pipeline.',
      impl: 'Built DAG-based workflows on EKS to replace manual deployment steps as part of the pipeline re-engineering initiative.',
      metrics: [
        { type: 'time', val: '75%', lbl: 'Deployment time cut' }
      ]
    },
    {
      name: 'Linux',
      obj:  'Primary operating environment for all day-to-day platform engineering work.',
      impl: 'Shell scripting for automation, cron scheduling, systemd service management, and log inspection for incident triage.',
      metrics: []
    },
  ],
  languages: [
    { name: 'Python'     },
    { name: 'Bash / Shell' },
    { name: 'Go'         },
    { name: 'MATLAB'     },
  ],
  platforms: [
    {
      name: 'Dataiku DSS',
      obj:  'Serve as core SME for Dataiku — accountable for end-to-end platform health for 600+ global users.',
      impl: 'Manage platform infrastructure on EKS, govern project permissions, handle incident response, and built Python automation using Dataiku APIs for config-as-code and automated onboarding.',
      metrics: [
        { type: 'time',  val: '~80%', lbl: 'Onboarding admin saved' },
        { type: 'perf',  val: '600+', lbl: 'Users supported'        }
      ]
    },
    {
      name: 'Grafana',
      obj:  'Improve observability of high-priority runstreams and platform infrastructure metrics.',
      impl: 'Developed Go-based Grafana templating for CloudWatch and Prometheus metrics; built dashboards visualising near real-time data ingestion rates with customised alert settings.',
      metrics: [
        { type: 'outage', val: '67%', lbl: 'Alert noise cut'   },
        { type: 'outage', val: '23%', lbl: 'False alerts down' }
      ]
    },
    {
      name: 'Prometheus',
      obj:  'Provide a metrics backend for platform observability alongside Grafana.',
      impl: 'Deployed via kube-prometheus-stack on EKS; configured scrape targets for node exporters and Dataiku application metrics feeding Grafana dashboards and Alertmanager rules.',
      metrics: []
    },
    {
      name: 'Alertmanager',
      obj:  'Reduce alert noise and improve operational response times for the platform.',
      impl: 'Refactored Alertmanager routing trees, inhibition rules, and receiver integrations as part of the observability overhaul using Go-based Grafana templating.',
      metrics: [
        { type: 'outage', val: '~67%', lbl: 'Alert noise cut' }
      ]
    },
  ],
  certs: [
    { name: '☁ AWS Cloud Practitioner', url: 'https://www.credly.com/badges/cf531f5d-0881-40ef-b431-2d4484e791f3/public_url' },
    { name: '◈ Dataiku Core Designer',  url: 'https://verify.skilljar.com/c/tf3cg728cxs8' },
    { name: '◈ Dataiku Developer',      url: 'https://verify.skilljar.com/c/udo8i56ihozd' },
  ]
};