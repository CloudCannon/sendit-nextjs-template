export default function AboutTeam({ block, dataBinding }) {
    return (
        <div class="team">
        <div class="container">
            <div class="row">
            <div class="col-lg-10 col-xl-7 mx-auto">
                <div class="section-header">
                <h2>{block.title}</h2>
                </div>
            </div>
            </div>
            <div class="row">
                {block.team_members.map((member, i) => (
                    <div class="col-lg-3 col-md-6"  key={i}>
                        <div class="team-member">
                        <div class="team-member-thumb rounded-box">
                            <img src={member.image_path} alt="team-member-1 png" loading="lazy" />
                        </div>
                        <div class="team-member-details">
                            <h3>{member.name}</h3>
                            <p>{member.designation}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
