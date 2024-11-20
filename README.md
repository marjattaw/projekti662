# Käyttötapauskuvaukset

## Käyttötapaus 1: Selaa äänestyksiä
- **Käyttäjät:** Tavallinen käyttäjä
- **Laukaisija:** Käyttäjä avaa sovelluksen ja valitsee "Selaa äänestyksiä".
- **Esiehto:** Sovelluksessa on olemassa vähintään yksi äänestys.
- **Jälkiehto:** Näytetään lista olemassa olevista äänestyksistä.
- **Käyttötapauksen kulku:**
  1. Käyttäjä avaa sovelluksen.
  2. Käyttäjä valitsee "Selaa äänestyksiä".
  3. Sovellus hakee ja näyttää listan kaikista saatavilla olevista äänestyksistä.
- **Poikkeuksellinen toiminta:**
  - Jos äänestyksiä ei ole, sovellus näyttää viestin "Ei aktiivisia äänestyksiä".

## Käyttötapaus 2: Katsoo äänestystuloksia
- **Käyttäjät:** Tavallinen käyttäjä
- **Laukaisija:** Käyttäjä valitsee äänestyksen tarkasteltavaksi.
- **Esiehto:** Äänestyksellä täytyy olla vähintään yksi tulos.
- **Jälkiehto:** Näytetään valitun äänestyksen äänestystilanne.
- **Käyttötapauksen kulku:**
  1. Käyttäjä selaa äänestyksiä.
  2. Käyttäjä valitsee äänestyksen.
  3. Sovellus hakee ja näyttää äänestyksen tulokset.
- **Poikkeuksellinen toiminta:**
  - Jos äänestyksellä ei ole tuloksia, sovellus näyttää viestin "Ei tuloksia saatavilla".

## Käyttötapaus 3: Äänestä
- **Käyttäjät:** Tavallinen käyttäjä
- **Laukaisija:** Käyttäjä valitsee vaihtoehdon ja vahvistaa äänensä.
- **Esiehto:** Käyttäjä on valinnut äänestyksen.
- **Jälkiehto:** Käyttäjän ääni on rekisteröity.
- **Käyttötapauksen kulku:**
  1. Käyttäjä selaa ja valitsee äänestyksen.
  2. Käyttäjä valitsee vaihtoehdon.
  3. Käyttäjä vahvistaa valinnan.
  4. Sovellus rekisteröi äänen ja näyttää päivitetyn tuloksen.
- **Poikkeuksellinen toiminta:**
  - Jos äänen lähetys epäonnistuu, sovellus näyttää virheilmoituksen ja ohjaa käyttäjän yrittämään uudelleen.

## Käyttötapaus 4: Luo äänestys
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä avaa sovelluksen ja valitsee "Luo uusi äänestys".
- **Esiehto:** Ylläpitäjän täytyy olla kirjautuneena sovellukseen.
- **Jälkiehto:** Uusi äänestys lisätään sovellukseen.
- **Käyttötapauksen kulku:**
  1. Ylläpitäjä avaa sovelluksen ja valitsee "Luo uusi äänestys".
  2. Ylläpitäjä syöttää äänestyksen otsikon ja vaihtoehdot.
  3. Sovellus tallentaa äänestyksen.
  4. Uusi äänestys näkyy selausnäkymässä.
- **Poikkeuksellinen toiminta:**
  - Jos tiedot ovat puutteellisia, sovellus ilmoittaa virheestä eikä tallenna äänestystä.

## Käyttötapaus 5: Poista äänestys
- **Käyttäjät:** Ylläpitäjä
- **Laukaisija:** Ylläpitäjä valitsee poistettavan äänestyksen.
- **Esiehto:** Poistettava äänestys täytyy olla olemassa.
- **Jälkiehto:** Valittu äänestys poistetaan sovelluksesta.
- **Käyttötapauksen kulku:**
  1. Ylläpitäjä avaa sovelluksen ja selaa olemassa olevia äänestyksiä.
  2. Ylläpitäjä valitsee poistettavan äänestyksen.
  3. Sovellus poistaa valitun äänestyksen ja päivittää listauksen.
- **Poikkeuksellinen toiminta:**
  - Jos äänestystä ei voida poistaa, sovellus näyttää virheilmoituksen.
