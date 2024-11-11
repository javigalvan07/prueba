export function isWorkday(day) { 
    switch (day) { 
      case "lunes": 
      case "martes": 
      case "miércoles": 
      case "jueves": 
      case "viernes": 
        return true; 
      case "sábado": 
      case "domingo": 
        return false; 
      default: 
        return false; 
    }
  }
  