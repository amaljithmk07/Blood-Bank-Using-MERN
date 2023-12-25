import React from "react";
import './Userhome.css'
const Userhome = () => {
  return (
    <div className="userhome-body">
      <div className="userhome-content">
        <div className="userhome-image">
          <img src="/home-doctor.png" alt="" className="userhome-image-img" />
        </div>
        <h1 className="userhome-h1"> Blood Basics</h1>
        <p>
          {" "}
          Blood is a specialized body fluid. It has four main components:
          plasma, red blood cells, white blood cells, and platelets. Blood has
          many different functions, including:
        </p>
        <ul style={{ listStyleType: "circle" }}>
          <li> transporting oxygen and nutrients to the lungs and tissues</li>
          <li>forming blood clots to prevent excess blood loss</li>
          <li> carrying cells and antibodies that fight infection</li>
          <li>
            {" "}
            bringing waste products to the kidneys and liver, which filter and
            clean the blood
          </li>
          <li> regulating body temperature</li>
        </ul>
        <p>
          The blood that runs through the veins, arteries, and capillaries is
          known as whole blood, a mixture of about 55 percent plasma and 45
          percent blood cells. About 7 to 8 percent of your total body weight is
          blood. An average-sized man has about 12 pints of blood in his body,
          and an average-sized woman has about nine pints.{" "}
        </p>{" "}
        <br />
        <br />
        <div className="userhome-animation">
          <video width={500} height={284} autoPlay muted>
            <source src="/istockphoto-1292468456-640_adpp_is.mp4"  type="video/mp4"/>
          </video>
        </div>
        <h1 className="userhome-h1">The Components of Blood and Their Importance</h1>
        <p>
          {" "}
          Many people have undergone blood tests or donated blood, but
          hematology - the study of blood - encompasses much more than this.
          Doctors who specialize in hematology (hematologists) are leading the
          many advances being made in the treatment and prevention of blood
          diseases.
        </p>
        <p>
          If you or someone you care about is diagnosed with a blood disorder,
          your primary care physician may refer you to a hematologist for
          further testing and treatment.
        </p>
        <h1 className="userhome-h1"> Plasma</h1>
        <p>
          {" "}
          The liquid component of blood is called plasma, a mixture of water,
          sugar, fat, protein, and salts. The main job of the plasma is to
          transport blood cells throughout your body along with nutrients, waste
          products, antibodies, clotting proteins, chemical messengers such as
          hormones, and proteins that help maintain the body's fluid balance.
        </p>
        <div className="userhome-mid">
         <img src="/blood.jpg" alt="" className="userhome-mid-img" />
        </div>
        <h1 className="userhome-h1"> Red Blood Cells (also called erythrocytes or RBCs)</h1>
        <p>
          Known for their bright red color, red cells are the most abundant cell
          in the blood, accounting for about 40 to 45 percent of its volume. The
          shape of a red blood cell is a biconcave disk with a flattened center
          - in other words, both faces of the disc have shallow bowl-like
          indentations (a red blood cell looks like a donut).
        </p>
        <p>
          Production of red blood cells is controlled by erythropoietin, a
          hormone produced primarily by the kidneys. Red blood cells start as
          immature cells in the bone marrow and after approximately seven days
          of maturation are released into the bloodstream. Unlike many other
          cells, red blood cells have no nucleus and can easily change shape,
          helping them fit through the various blood vessels in your body.
          However, while the lack of a nucleus makes a red blood cell more
          flexible, it also limits the life of the cell as it travels through
          the smallest blood vessels, damaging the cell's membranes and
          depleting its energy supplies. The red blood cell survives on average
          only 120 days.
        </p>
        <p>
          Red cells contain a special protein called hemoglobin, which helps
          carry oxygen from the lungs to the rest of the body and then returns
          carbon dioxide from the body to the lungs so it can be exhaled. Blood
          appears red because of the large number of red blood cells, which get
          their color from the hemoglobin. The percentage of whole blood volume
          that is made up of red blood cells is called the hematocrit and is a
          common measure of red blood cell levels.
        </p>
        <h3 className="userhome-h3">Host country for World Blood Donor Day 2023 :</h3>
        <p>
          The host country for the global event of World Blood Donor Day 2023 is
          Algeria through its National Blood Transfusion Service.
        </p>
      </div>
      
    </div>
  );
};

export default Userhome;
