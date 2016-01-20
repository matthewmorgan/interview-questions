function condense(meetings){
  var condensed = [];
  var lastStart = 0;
  var lastEnd = 0;
  var lastMeeting = [lastStart, lastEnd];
  for (var ii=0;ii=meetings.length;ii++){
    var tuple = meetings[ii];
    var thisStart = tuple[0];
    var thisEnd = tuple[1];
    //if thisStart <= lastEnd, replace lastEnd with thisEnd
    if (thisStart<=lastEnd){
      lastMeeting[1] = thisEnd;
    }
    //else 
  }
  
  return condensed;
}