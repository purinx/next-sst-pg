/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(_input) {
    return {
      name: 'next-pg-app',
      removal: 'remove',
      home: 'aws',
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc('NextPgVpc', { bastion: true, nat: 'ec2' });
    const database = new sst.aws.Postgres('NextPgPostgres', {
      vpc,
      proxy: true,
    });
    new sst.aws.Nextjs('NextPgApp', {
      link: [database],
      vpc,
    });
    new sst.x.DevCommand('Studio', {
      link: [database],
      dev: {
        autostart: true,
        command: 'npx drizzle-kit studio',
      },
    });
  },
});
