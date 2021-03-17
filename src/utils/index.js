//check user admin
export const checkUserIsAdmin = currentUser =>{
    if (!currentUser || !Array.isArray(currentUser.userRoles)) return false
    const { userRoles } = currentUser;
    if(userRoles.includes('admin')) return true;
    return false;  
  }

//random number 
export const randomNumberGen = () => {
    var temp = Math.floor((Math.random()*100))
    return temp
}

//time
export const reqTime = ['09:00 am','09:15 am', '09:30 am', '09:45 am', '10:00 am', '10:15 am', 
  '10:30 am', '10:45 am', '11:00 am', '11:15 am', '11:30 am', '11:45 am', '12:00 pm',
  '12:15 pm', '12:30 pm', '12:45 pm', '01:00 pm', '01:15 pm', '01:30 pm', '01:45 pm', '02:00 pm',
  '02:15 pm', '02:30 pm', '02:45 pm', '03:00 pm', '03:15 pm', '03:30 pm', '03:45 pm', '04:00 pm','04:15 pm', '04:30 pm', '04:45 pm', 
  '05:00 pm','05:15 pm', '05:30 pm', '05:45 pm', '06:00 pm', '06:15 pm', '06:08 pm', '06:45 pm', '07:00 pm',
  '07:15 pm', '07:30 pm', '07:48 pm', '08:00 pm', '08:15 pm', '08:30 pm', '08:45 pm', '09:00 pm',
]