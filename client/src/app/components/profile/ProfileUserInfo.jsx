export default function ProfileUserInfo({userData}) {
    const { profile } = userData;
    return (
        <>
                <div className="mb-12">
        <h3 className="lg:text-nowrap text-left text-xl font-bold text-red-orange mb-4">
          Sobre mí
        </h3>
        <p className="text-left font-nunito text-base">
          {profile.description}
        </p>
        <hr className="lg:hidden w-[10rem] my-8 m-auto border-red-orange"></hr>
        </div>
        <div>
        <h3 className="lg:text-nowrap text-xl text-left font-bold text-red-orange mb-4">
          Momento vital
        </h3>
        <p className="text-left font-nunito text-base">
          {profile.vitalMoment}
        </p>
        <hr className="lg:hidden w-[10rem] my-8 m-auto border-red-orange"></hr>
        </div>
        </>

    );
  }



