function reverseWords(s: string): string {
  return s.split(' ').filter(Boolean).reverse().reduce((acc,cur,index)=>{
      return acc +" "+ cur
  },'').trim();
};