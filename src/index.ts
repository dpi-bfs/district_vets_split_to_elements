import { OneBlinkAPIHostingRequest } from '@oneblink/cli'
import Boom from '@hapi/boom'
import * as districtVetSplit from './districtVetSplit.js'
// import getLastUrlSegment from './lib/utilities.js'

export async function post(
  request: OneBlinkAPIHostingRequest<{
    definition: Record<string, any>
    element: Record<string, any>
    submission: Record<string, string>
  }>,
) {

  // const districtVetSearchElementName = getLastUrlSegment(request.url.pathname.toString());
  const districtVetSearchElementName = request.body.element.name;
  
  console.log(`districtVetSearchElementName is ${districtVetSearchElementName}`)
  
  if (!request || !request.body || !request.body.submission) {
    throw Boom.badRequest('submission missing')
  }
  const { submission } = request.body

  const districtVetSearchElementValue = submission[districtVetSearchElementName]
  console.log ("districtVetSearchElementValue: " + districtVetSearchElementValue)

  if (!districtVetSearchElementValue) {
    throw Boom.badRequest(`"${districtVetSearchElementName}" isn't giving us a value: ${districtVetSearchElementName}`)
  }

  let districtVet: districtVetSplit.districtVetInterface = { 
    DistrictVetName: "",
    LocalLandServicesRegion: "",
    Location: "",
    ContactNumber: "",
    Email: ""
  };

  try {

    districtVet =  districtVetSplit.getDistrictVetContactDetails (districtVetSearchElementValue)

    if (!districtVet) {
      throw Boom.badRequest('Could not get a response in time. Please try again.')
    } 
  } catch (e) {
    if (e instanceof Boom.Boom && e.output && e.output.statusCode === 404) {
      // Catch a 404 from pivotal and make it a 400 with a nice message.
      // Use <br /> if you want paragraphs in the text.
      throw Boom.badRequest("District Vet Contact details was not parsed successfully.")
    }
    console.error(e)
    throw Boom.badImplementation('uncaught error')
  }
  // Returning a well formed object, without error codes, is enough for the UI's Data lookup element
  // to register this as valid.
  // return {} 

  // If we wanted to return values to other elements we'd do something like the following
  return { 
    "DistrictVetName": districtVet.DistrictVetName,
    "DistrictVetLocalLandServicesRegion": districtVet.LocalLandServicesRegion,
    "DistrictVetLocation": districtVet.Location,
    "DistrictVetContactNumber": districtVet.ContactNumber,
    "DistrictVetEmail": districtVet.Email,
  } 
}