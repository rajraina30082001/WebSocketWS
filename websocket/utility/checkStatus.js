// check status of match

function checkStatus(startTime,endTime){
    const start = new Date(startTime);
    const end = new Date(endTime);
    const now = new Date();
    if(now < start){
        return "scheduled";
    }else if(now > end){
        return "finished";
    }else{
        return "live";
    }
}

export default checkStatus;