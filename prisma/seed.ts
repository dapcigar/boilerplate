import bcrypt from 'bcryptjs';
import { PrismaClient, OrganizationRole, SubscriptionPlan, SubscriptionStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  const user = await prisma.user.upsert({
    where: { email: 'owner@example.com' },
    update: {},
    create: {
      email: 'owner@example.com',
      name: 'Owner User',
      passwordHash,
    },
  });

  const organization = await prisma.organization.upsert({
    where: { slug: 'acme' },
    update: {},
    create: {
      name: 'Acme Inc',
      slug: 'acme',
    },
  });

  await prisma.membership.upsert({
    where: { userId_organizationId: { userId: user.id, organizationId: organization.id } },
    update: { role: OrganizationRole.OWNER },
    create: {
      userId: user.id,
      organizationId: organization.id,
      role: OrganizationRole.OWNER,
    },
  });

  await prisma.subscription.upsert({
    where: { organizationId: organization.id },
    update: { plan: SubscriptionPlan.FREE, status: SubscriptionStatus.ACTIVE },
    create: {
      organizationId: organization.id,
      plan: SubscriptionPlan.FREE,
      status: SubscriptionStatus.ACTIVE,
    },
  });
}

main().finally(async () => prisma.$disconnect());
