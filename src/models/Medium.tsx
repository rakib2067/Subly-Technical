export interface MediaItem{
    id:number
    createdAt:string;
    updatedAt:string;
    cover:string;
    status:status;
    languages: string[];
    errorMessage?:string;
  }

export class Medium{
    errorMessage?: string;
    createdAt:Date;
    updatedAt:Date;
    
    constructor( 
        public readonly id: number, 
         createdAt:string, 
         updatedAt: string, 
        public status: status,
        public cover: string,
        public languages: string[],errorMessage?:string){
            this.createdAt= new Date(createdAt)
            this.updatedAt= new Date(updatedAt)
            this.errorMessage=errorMessage;
        }

        get timeDifference(): string{

            //If difference is under a month return duration in days
            const endDate= new Date();
            let difference= endDate.getTime() - this.updatedAt.getTime()
            let totalDays = Math.ceil(difference / (1000 * 3600 * 24));


            if(totalDays<=30){
                return `${totalDays} days`
            }


            else{
                //return difference in months/years
                const startMonth = this.updatedAt.getMonth()
                const endMonth = endDate.getMonth()
                const calculatedDateBy = startMonth - endMonth

                //total duration in months
                const dateDifference = Math.abs(
                  calculatedDateBy + 12 * (this.updatedAt.getFullYear() - endDate.getFullYear())
                )


                //duration in years
                if(dateDifference==12) return `${dateDifference/12} year`  

                if(dateDifference%12==0) return `${dateDifference/12} years`

                
                //duration in years and months
                if (dateDifference>=12){
                    const years=Math.floor(dateDifference/12)
                    const months= dateDifference- (years*12)
                    return `${years} years and ${months} months`
                }

                
                return `${dateDifference} months`
            }
        }

        
}

export type status = "ready"|"error"|"transcribing"