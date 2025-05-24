
export type UserRole = "admin" | "client";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  kycStatus: "pending" | "approved" | "rejected";
  kycSubmittedAt?: string;
  temporaryPassword?: string;
  address?: string;
  city?: string;
  phoneNumber?: string;
  accountBalance?: number;
  profitLoss?: number;
}

export interface KYCDetails {
  userId: string;
  fullName: string;
  dateOfBirth: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  idType: "passport" | "drivingLicense" | "nationalId";
  idNumber: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}
