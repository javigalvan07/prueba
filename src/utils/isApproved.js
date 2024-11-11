export function isApproved(vnota) {
 
  const nota = vnota;
 
  if ((nota<0) || (nota > 10)) {
    return null
  } else {
    if (nota <5) {
      return false
    } else {
      return true
    }
  }
}