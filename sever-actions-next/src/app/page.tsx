import { Planet, PlanetItem } from '@/components/PlanetItem/page';
import { PlanetForm } from '@/components/PlanetForm/page';
import styles from './page.module.css';

export default async function Page() {
  const response = await fetch('<http://localhost:3000/api/planets>');
  const planets: Planet[] = await response.json();

  return (
    <div className={styles.page}>
      <h1>Planetas</h1>

      <div className={styles.container}>
        <PlanetForm />

        <section className={styles.planets}>
          {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet} onDelete={() => null} />
          ))}
        </section>
      </div>
    </div>
  );
};
