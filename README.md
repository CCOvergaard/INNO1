
# Tutormatch

Tutormatch er en mobilapplikation, der hjælper studerende med at finde kvalificerede tutorer til at få hjælp til deres fag. Tutorer kan tilmelde sig platformen, tilføje deres fag og timepriser, mens studerende kan søge efter og vælge tutorer, der passer til deres behov.

## Funktionaliteter

- **Tutor Tilmelding**: Tutorer kan tilmelde sig ved at angive deres navn, fag, timepris, etc.
- **Søg efter Tutorer**: Studerende kan søge efter tutorer baseret på eksamensfag.
- **Firebase Integration**: Realtidsdatabasen Firebase bruges til at håndtere data for tutorer og studerende.

## Teknologier Bruges

- **React Native**: Framework til udvikling af mobilapplikationen.
- **Firebase Realtime Database**: Til opbevaring af data som tutorer og deres detaljer.
- **JavaScript**: Programmeringssproget til at skrive applikationen.

## Installationsvejledning

Følg disse trin for at installere og køre projektet på din lokale maskine:

1. **Klon repositoryet**:
   ```sh
   git clone https://github.com/CCOvergaard/INNO1.git
   ```
2. **Naviger til projektmappen**:
   ```sh
   cd INNO1-main/Project1
   ```
3. **Installer afhængigheder**:
   Sørg for, at du har Node.js og npm installeret.
   ```sh
   npm install
   ```
4. **Kør applikationen**:
   Kør følgende kommando for at starte projektet, og få en QR-kode op i terminalen:
   ```sh
   npx expo start
   ```

   Scan QR-koden med Expo Go-appen på din iOS- eller Android-enhed for at se applikationen.

## Krav og Forudsætninger

- **Node.js**: Sørg for, at Node.js er installeret (version 14 eller nyere).
- **npm eller yarn**: Bruges til at installere projektets afhængigheder.
- **Expo Go App**: Installer Expo Go-appen på din telefon for at scanne QR-koden.

## Projektstruktur

- **App.js**: Hovedfilen, hvor applikationen starter.
- **firebase.js**: Indeholder Firebase-konfiguration og opsætning.
- **/screens**: Indeholder de forskellige views såsom `TutorSignUp` og `StudentSearch`.
- **/assets**: Indeholder eventuelle billeder eller ressourcer, som appen bruger.

