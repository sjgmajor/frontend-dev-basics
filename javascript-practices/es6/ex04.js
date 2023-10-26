/**
 * default parameter
 * 
 * 
 */

const print = function(str, end='\n') {
    console.log(str.join(end));
}

print(['Always', 'with', 'me']);
