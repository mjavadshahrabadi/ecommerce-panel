import React, { FC, ReactElement } from 'react'
import { UserColumn } from '@/components/users/UsersTable/DataTable/UserCol'
import { RoleCol } from '@/components/users/UsersTable/DataTable/RoleCol'
import { Role } from '@/components/users/enum/Role'
import { PlanCol } from '@/components/users/UsersTable/DataTable/PlanCol'
import { Plan } from '@/components/users/enum/Plan'
import { BillingCol } from '@/components/users/UsersTable/DataTable/BillingCol'
import { Billing } from '@/components/users/UsersTable/DataTable/enum/Billing'
import { StatusCol } from '@/components/users/UsersTable/DataTable/StatusCol'
import { Status } from '@/components/users/enum/Status'
import { ActionsCol } from '@/components/users/UsersTable/DataTable/ActionsCol'

export const TableBody: FC = (): ReactElement => {
  return (
    <>
      <tr>
        <UserColumn
          name="جواد شهرآبادی"
          avatarSrc="/avatar/avatar-1.png"
          email="test@test.com"
          uid="a-1"
        />
        <RoleCol role={Role.admin} />
        <PlanCol plan={Plan.enterprise} />
        <BillingCol billing={Billing.ManualCreditCard} />
        <StatusCol status={Status.active} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="هادی محمدی"
          avatarSrc="/avatar/avatar-3.png"
          email="test@test.com"
          uid="a-2"
        />
        <RoleCol role={Role.editor} />
        <PlanCol plan={Plan.basic} />
        <BillingCol billing={Billing.AutoDebit} />
        <StatusCol status={Status.pending} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="آرزو علیپور"
          avatarSrc="/avatar/avatar-2.png"
          email="test@test.com"
          uid="a-3"
        />
        <RoleCol role={Role.admin} />
        <PlanCol plan={Plan.company} />
        <BillingCol billing={Billing.ManualPaypal} />
        <StatusCol status={Status.inActive} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="مژگان یوسفی"
          avatarSrc="/avatar/avatar-4.png"
          email="test@test.com"
          uid="a-4"
        />
        <RoleCol role={Role.maintainer} />
        <PlanCol plan={Plan.team} />
        <BillingCol billing={Billing.ManualCash} />
        <StatusCol status={Status.active} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="امین عرب"
          avatarSrc="/avatar/avatar-5.png"
          email="test@test.com"
          uid="a-5"
        />
        <RoleCol role={Role.subscriber} />
        <PlanCol plan={Plan.basic} />
        <BillingCol billing={Billing.ManualCreditCard} />
        <StatusCol status={Status.active} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="فائزه کشاورز"
          avatarSrc="/avatar/avatar-6.png"
          email="test@test.com"
          uid="a-6"
        />
        <RoleCol role={Role.author} />
        <PlanCol plan={Plan.enterprise} />
        <BillingCol billing={Billing.ManualCreditCard} />
        <StatusCol status={Status.pending} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="جواد شهرآبادی"
          avatarSrc="/avatar/avatar-1.png"
          email="test@test.com"
          uid="a-7"
        />
        <RoleCol role={Role.subscriber} />
        <PlanCol plan={Plan.company} />
        <BillingCol billing={Billing.AutoDebit} />
        <StatusCol status={Status.inActive} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="هادی محمدی"
          avatarSrc="/avatar/avatar-3.png"
          email="test@test.com"
          uid="a-8"
        />
        <RoleCol role={Role.admin} />
        <PlanCol plan={Plan.team} />
        <BillingCol billing={Billing.ManualCreditCard} />
        <StatusCol status={Status.inActive} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="آرزو علیپور"
          avatarSrc="/avatar/avatar-2.png"
          email="test@test.com"
          uid="a-9"
        />
        <RoleCol role={Role.author} />
        <PlanCol plan={Plan.company} />
        <BillingCol billing={Billing.ManualCash} />
        <StatusCol status={Status.active} />
        <ActionsCol />
      </tr>
      <tr>
        <UserColumn
          name="مژگان یوسفی"
          avatarSrc="/avatar/avatar-4.png"
          email="test@test.com"
          uid="a-10"
        />
        <RoleCol role={Role.maintainer} />
        <PlanCol plan={Plan.enterprise} />
        <BillingCol billing={Billing.AutoDebit} />
        <StatusCol status={Status.pending} />
        <ActionsCol />
      </tr>
    </>
  )
}
