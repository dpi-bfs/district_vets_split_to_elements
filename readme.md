# District Vet Split To Elements

On (for example) the "Notification of a low risk Emergency Animal Disease Exclusion" form, "District veterinarian" Page after a user selects a "District veterinarian" the following code splits out the technical value returned (the label, not value is shown on the form) to elements such as:

- Local Land Services Region
- Location
- Contact number
- Email

* Deployed to API nswfoodauthority-dv.api.oneblink.io

* The Lookup that references nswfoodauthority-dv.api.oneblink.io is "Any Form - District Vet - DistrictVet - Split to Elements".
  - DEV: https://nswfoodauthority-dv-dev.api.oneblink.io/dv-split/DistrictVet
  - TEST: https://nswfoodauthority-dv-test.api.oneblink.io/dv-split/DistrictVet
  - Train: https://nswfoodauthority-dv-train.api.oneblink.io/dv-split/DistrictVet
  - Prod: https://nswfoodauthority-dv.api.oneblink.io/dv-split/DistrictVet