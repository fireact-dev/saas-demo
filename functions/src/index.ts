import { initializeApp } from 'firebase-admin/app';
import configFile from './saasConfig.json';
import type { Plan, Permission } from '@fireact.dev/saas-cloud-functions';
import {
  createSubscription,
  createInvite,
  getSubscriptionUsers,
  acceptInvite,
  rejectInvite,
  revokeInvite,
  removeUser,
  updateUserPermissions,
  stripeWebhook,
  changeSubscriptionPlan,
  cancelSubscription,
  getPaymentMethods,
  createSetupIntent,
  setDefaultPaymentMethod,
  deletePaymentMethod,
  updateBillingDetails,
  getBillingDetails,
  transferSubscriptionOwnership
} from '@fireact.dev/saas-cloud-functions';

// Initialize Firebase Admin
initializeApp();

// Set up global config
declare global {
    var saasConfig: {
        stripe: {
            secret_api_key: string;
            end_point_secret: string;
        };
        emulators: {
            enabled: boolean;
            useTestKeys: boolean;
        };
        plans: Plan[];
        permissions: Record<string, Permission>;
    };
}
global.saasConfig = configFile;

// Export cloud functions
export {
  createSubscription,
  createInvite,
  getSubscriptionUsers,
  acceptInvite,
  rejectInvite,
  revokeInvite,
  removeUser,
  updateUserPermissions,
  stripeWebhook,
  changeSubscriptionPlan,
  cancelSubscription,
  getPaymentMethods,
  createSetupIntent,
  setDefaultPaymentMethod,
  deletePaymentMethod,
  updateBillingDetails,
  getBillingDetails,
  transferSubscriptionOwnership
}
