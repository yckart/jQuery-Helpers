jQuery.fn.getMatrix = function(i){
    var array = this.css('transform').split('(')[1].split(')')[0].split(',');
    return array[i] || array;
};