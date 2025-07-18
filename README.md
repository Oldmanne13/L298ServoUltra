
> Åbn denne side på [https://oldmanne13.github.io/l298servoultra/](https://oldmanne13.github.io/l298servoultra/)

## Brug som udvidelse

Dette lager kan blive tilføjet som en **udvidelse** i MakeCode.

* åbn [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik på **Nyt projekt**
* Klik på **Udvidelser** under tandhjulsmenuen
* søg efter **https://github.com/oldmanne13/l298servoultra**, og importer

## Rediger dette projekt

Sådan redigerer du dette lager i MakeCode.

* åbn [https://makecode.microbit.org/](https://makecode.microbit.org/)
* klik på **Importer**, og klik derefter på **Import-URL-adresse**
* indsæt **https://github.com/oldmanne13/l298servoultra**, og klik på Importer

#### Metadata (bruges til søgning, gengivelse)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
# L298ServoUltra

**MakeCode-udvidelse til micro:bit**  
Styr motorer via L298N, servo og afstandssensor (HC-SR04) med specialbygget breakout board.

---

## 🔧 Funktioner

Denne udvidelse indeholder blokke til:

- 🟢 Motor A & B styring (fremad/baglæns + hastighed) via L298N
- 🔵 Servo-styring via P1 (0–180°)
- 🔴 Afstandsmåling med HC-SR04 (Trigger på P16, Echo på P10)

Alle funktioner er tilpasset fast pin-layout på breakout board.

---

## 🔌 Pin-konfiguration

| Funktion       | micro:bit Pin |
|----------------|---------------|
| EnA (PWM A)    | P2            |
| EnB (PWM B)    | P8            |
| IN1            | P12           |
| IN2            | P13           |
| IN3            | P14           |
| IN4            | P15           |
| Servo          | P1            |
| HC-SR04 Trigger| P16           |
| HC-SR04 Echo   | P10           |

---

## 🧱 Tilføj udvidelsen i MakeCode

1. Gå til: [https://makecode.microbit.org/](https://makecode.microbit.org/)
2. Start et nyt projekt
3. Klik på **Extensions**
4. Søg efter:



---

## 📦 Blokoversigt

- `Motor A fremad med hastighed`
- `Motor A baglæns med hastighed`
- `Stop motor A`
- `Motor B fremad med hastighed`
- `Motor B baglæns med hastighed`
- `Stop motor B`
- `Drej servo til grader`
- `Mål afstand i cm`

---

## 🧪 Eksempel på brug

```ts
L298ServoUltra.motorAFrem(800)
L298ServoUltra.motorBFrem(800)
basic.pause(1000)
L298ServoUltra.stopMotorA()
L298ServoUltra.stopMotorB()





