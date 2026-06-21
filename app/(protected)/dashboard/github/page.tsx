import { requireAuth } from '@/features/auth/actions';
import { DashboardHeader } from '@/features/dashboard/dashboard-header';
import { getInstallationStatus } from '@/features/github/server/installation';
import { GithubConnectCard } from '@/features/github/components/github-connect-card';
import { Metadata } from 'next';
import React from 'react'

export const metaData : Metadata = {
  title : "Github App | Dashboard"
}

const DashBoardGithubPage = async () => {

  const session = await requireAuth();
  const installation = await getInstallationStatus(session.user.id)


  return (
    <>
      <DashboardHeader
        title="Github App"
        description="Install or disconnect the reviewer app on your Github account"
      />
      <GithubConnectCard userId={session.user.id} installation={installation} />
    </>
  );
  
}

export default DashBoardGithubPage
