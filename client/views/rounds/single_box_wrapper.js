Template.singleBoxWrapper.helpers({
    rowStart: function(){
        a=this.roundNum % 10 == 1;
        return a;
    } ,
    rowEnd: function(){
        a=this.roundNum % 10 == 0;
        return a;
    }
});