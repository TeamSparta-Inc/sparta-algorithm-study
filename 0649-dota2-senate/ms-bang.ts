function predictPartyVictory(s: string): string {
  let n = s.length, r: number[] = [], d: number[] = [];
  for (let i = 0; i < n; i++) s[i] === 'R' ? r.push(i) : d.push(i);
  let i = 0, j = 0; 
  while (i < r.length && j < d.length) {
    if (r[i] < d[j]) r.push(r[i] + n); 
    else d.push(d[j] + n);
    i++; 
    j++;
  }
  return i < r.length ? "Radiant" : "Dire";
}