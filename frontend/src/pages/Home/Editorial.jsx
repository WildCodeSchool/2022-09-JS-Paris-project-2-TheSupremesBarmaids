import React from "react";

function Editorial() {
  return (
    <div className="editorial">
      <div className="intro">
        <p>
          La journée est finie. Avec juste quelques ingrédients à portée de
          main, prenez le temps de savourer un moment de détente privilégié et
          bien mérité.
        </p>
        <p>
          Découvrez avec nous l’art du Cocktail pour des moments suspendus et
          hors du temps à siroter des mélanges surprenants ou plus classiques.
          Ravissez vos papilles avec nos recettes aux influences exotiques et
          européennes alliant fraicheur des produits, saveurs subtiles et épices
          du monde.
        </p>
        <p>
          Le cocktail est avant tout un créateur d’émotions, un art de
          convivialité. Promis, pas besoin de savoir jongler.
        </p>
      </div>

      <h1 className="linedTitle">
        <span className="linedTitle__text">Découvrez, shakez et dégustez</span>
      </h1>

      <section className="editoBlock editoBlock--type1">
        <div className="editoBlock__illustration">
          <img src="/images/composition-330.jpg" alt="imageComposition" />
        </div>
        <div className="editoBlock__article">
          <h2 className="editoBlock__title">Compostion</h2>
          <p>
            La structure d’un cocktail est toujours la même et se décompose en 3
            parties distinctes : la base, le corps et la touche aromatique.
          </p>
          <p>
            La base, le plus souvent un alcool fort comme le rhum, la vodka ou
            le gin. donne le ton du cocktail. Elle est la première brique du
            mélange, celle sur laquelle les autres briques vont s’adosser.
          </p>
          <p>
            Le corps peut lui être composé de plusieurs ingrédients. Il est là
            pour l’allonger et lui donner plus de texture. Celle-ci peut-être
            par exemple pétillante (soda), crémeuse (oeufs) ou épaisse (purée de
            fruits).
          </p>
          <p>
            La touche aromatique quant à elle permet d’affirmer son caractère
            et/ou de lui apporter une note d’originalité.
          </p>
        </div>
      </section>

      <section className="editoBlock editoBlock--type2">
        <div className="editoBlock__illustration">
          <img src="/images/equilibre-330.jpg" alt="imageEquilibre" />
        </div>
        <div className="editoBlock__article">
          <h2 className="editoBlock__title">Equilibre</h2>
          <p>
            Pour un cocktail réussi, il faut s’assurer que le mélange soit un
            équilibre parfait entre force, douceur et acidité. Il s’agit de la
            règle des 3S bien connus de nos suprêmes barmaids (sweet, sour et
            strong).
          </p>
          <p>
            Pour trouver cet équilibre ténu qui fera la saveur unique de votre
            cocktail et séduira vos papilles, limitez le nombre d’ingrédients. A
            partir de 5, il devient très difficile de gérer les différentes
            saveurs.
          </p>
          <p>
            Prenez garde aussi à leur texture et leur compatibilité car oui le
            citron fait cailler la crème par exemple.
          </p>
        </div>
      </section>

      <section className="editoBlock editoBlock--type1">
        <div className="editoBlock__illustration">
          <img src="/images/presentation-330.jpg" alt="imagePresentation" />
        </div>
        <div className="editoBlock__article">
          <h2 className="editoBlock__title">Présentation</h2>
          <p>
            Le cocktail est un ravissement pour les papilles mais doit l’être
            aussi pour les yeux! Il mettra en avant votre mélange et le rendra
            encore plus attrayant.
          </p>
          <p>
            Quelques bonbons sur un cure-dent adouciront un cocktail charpenté
            et un verre givré au sucre habillera délicatement une Margarita.
          </p>
          <p>
            Vous pouvez aussi ajouter des feuilles de menthe dans votre bac à
            glaçons pour rafraîchir avec élégance des cocktails fruités.
          </p>
        </div>
      </section>

      <div>Listlink</div>
    </div>
  );
}

export default Editorial;
