import { LicenseSimple } from '@/api/schemas/repositories'

const getLicense = (licenseSimple: LicenseSimple | null) => {
  let license = licenseSimple?.spdx_id ?? ''

  if (license === 'NOASSERTION') {
    license = ''
  }

  return license
}

export default getLicense
