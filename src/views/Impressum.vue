<template>
  <div class="impressum">
    <div class="impr-header">
      <h1>Impressum</h1>
    </div>

    <div class="impr-content">
      <p id="content-start">
        Angaben gemäß § 5 TMG
      </p>
      <br />
      <p>Aaron Behrendsen</p>
      <p>Susannenstraße 6</p>
      <p>20357 Hamburg</p>

      <h2>Vertreten durch:</h2>
      <p>Aaron Behrendsen</p>

      <h2>Kontakt:</h2>
      <p>Telefon: 017682055328</p>
      <p>
        E-Mail:
        <a href="mailto:aarigato@icloud.com">aarigato@icloud.com</a>
      </p>

      <h3>Haftungsausschluss:</h3>

      <h4>Haftung für Inhalte</h4>

      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
        sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
        oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>

      <h4>Haftung für Links</h4>

      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
        Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h4>Urheberrecht</h4>

      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>

      <h4>Datenschutz</h4>

      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden,
        erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p>

      <br />
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>

      <p id="content-end">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
        widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
      </p>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "Impressum",
  components: {
    TheFooter
  }
};
</script>

<style>
.impressum {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 300px));
  grid-auto-flow: row;
  justify-content: center;
  margin: 10px 25px;
}

.impr-header {
  background: url('https://www.aarigato.de/assets/images/background.png');
  background-position: center -270px;
  grid-column: 1 / -1;
}

.impr-header h1 {
  margin: 5px 0;
}

.impr-content {
  grid-column: 1 / -1;
  background-color: var(--beige);
  margin: 10px 0;
  text-align: left;
}

.impr-content a {
    color: var(--primary);
    text-decoration: none;
}

.impr-content a:hover {
    color: var(--hover);
}

.impr-content h2,
.impr-content h3,
.impr-content h4,
.impr-content p {
  margin: 10px 50px;
}

#content-start {
    margin-top: 25px;
}

#content-end {
    margin-bottom: 25px;
}

@media (min-width: 800px) {
  .impressum {
    grid-template-columns: repeat(3, minmax(100px, 300px));
  }
}

@media (min-width: 1100px) {
  .impressum {
    grid-template-columns: repeat(4, minmax(100px, 300px));
  }
}
</style>
