/*
 insert into film values(1,2012,"Rambo","akcija",90,"Kina","Lep film");
 insert into film values(2,2001,"Pepeljuga","deciji",90,"Kina","Lepi film");

 insert into sala values(1,10,"C","Sala1");
 insert into sala values(2,11,"D","Sala2");

 insert into projekcija values(1,500,"1.1.2016.","Rambo",1);
 insert into projekcija values(2,600,"1.4.2017.","Pepeljuga",2);

 insert into karta values(1,"1.4.2017.","a","2A",1);
 */


/*
 netstat -o -n -a | findstr 0.0:8080
 taskkill /F /PID 8080
 */

export class Korisnik {
  constructor(public id: number,
              public ime: string,
              public prezime: string,
              public korisnickoIme: string,
              public email: string,
              public lozinka: string,
              public tipKorisnika: string) {
  }
}


export class Film {
  constructor(public id: number,
              public naziv: string,
              public zanr: string,
              public godinaProizvodnje: number,
              public trajanje: number,
              public zemljaPorekla: string,
              public opis: string) {
  }
}

export class Projekcija {
  constructor(public id: number,
              public karte: Karta[],
              public datumProjekcije: string,
              public nazivFilma: number,
              public cena: number,
              public sala: Sala) {
  }
}


export class Karta {
  constructor(public id: number,
              public korisnickoImeKupca: string,
              public oznakaSedista: string,
              public datumProdaje: number,
              public projekcija: Projekcija) {
  }
}

export class Sala {
  constructor(public id: number,
              public naziv: string,
              public maksimalniBrojReda: number,
              public maksimalnoSediste: number,
              public projekcije: Projekcija[]) {
  }
}

