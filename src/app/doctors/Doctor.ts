import { Injectable } from '@angular/core';
import { IAdapter } from '../core/adapter';

export class Doctor {
  constructor(
    public DOJ?: Date,
    public address?: {
      city: string,
      country: string,
      line1: string,
      state: string,
      zipCode: number
    },
    public contacts?: {
      phones: [string],
      email: string
    },
    public department?: {
      deptName: string,
      deptNo: number
    },
    public designation?: string,
    public firstName?: string,
    public gender?: string,
    public isActive?: boolean,
    public isAdmin?: boolean,
    public isDoctor?: boolean,
    public lastName?: string,
    public location?: {
      coordinates: [number],
      type: string
    },
    public qualifications?: [string],
    public specialisations?: [string],
    public visitingTime?: [{
      branch: string,
      timings: Date
    }]) { }
}

@Injectable({
  providedIn: 'root'
})
export class DoctorAdapter implements IAdapter<Doctor> {
  adapt(item: any): Doctor {
    return new Doctor(
      item.DOJ,
      item.address,
      item.contacts,
      item.department,
      item.designation,
      item.firstName,
      item.gender,
      item.isActive,
      item.isAdmin,
      item.isDoctor,
      item.lastName,
      item.location,
      item.qualifications,
      item.specialisations,
      item.visitingTime)
  }
}