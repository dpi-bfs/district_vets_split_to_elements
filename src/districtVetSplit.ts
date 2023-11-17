
export interface districtVetInterface { 
  DistrictVetName: string;
  LocalLandServicesRegion: string;
  Location: string;
  ContactNumber: string;
  Email: string;
} 

// districtVetElementValue. A string with pipe separated values in the following order.
//  District Vet Name | Region | Location | Contact Number
//  Burt Smithie | Central Tablelands | Someplace | 1111 1111
// Returns: An object with the contact details assigned to the keys: DistrictVetName, Region, Location, ContactNumber
export function getDistrictVetContactDetails(districtVetElementValue: string){
  const districtVet: districtVetInterface = { 
    DistrictVetName: "",
    LocalLandServicesRegion: "",
    Location: "",
    ContactNumber: "",
    Email: ""
  };

  let districtVetContactDetailsArray = districtVetElementValue.split('|');
  districtVetContactDetailsArray.forEach((arrayElement, index, array) => {
    array[index] = arrayElement.trim();
  });

  districtVet.DistrictVetName = districtVetContactDetailsArray[0];
  districtVet.LocalLandServicesRegion = districtVetContactDetailsArray[1];
  districtVet.Location = districtVetContactDetailsArray[2];
  districtVet.ContactNumber = districtVetContactDetailsArray[3];
  districtVet.Email = districtVetContactDetailsArray[4];

  return districtVet;
}