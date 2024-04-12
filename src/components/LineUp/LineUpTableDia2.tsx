const LineUpTableDia2 = () => {
  return (
    <>
      <section>
        <h4 className="table-title">Keynotes</h4>
        <div className="keynotes-flex">
          <div className="keynote">
            <span>14:00</span>
            <p>SEGURIDAD</p>
          </div>
        </div>
      </section>
      <table className="talks-table">
        <thead>
          <tr className="header">
            <th>
              <h4>Talks</h4>
            </th>
            <th>
              <span>Stage A</span>
            </th>
            <th>
              <span>Stage B</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw600">14:15</td>
            <td>Strikethrough star distribute device library.</td>
            <td>Union select bold plugin slice component pen.</td>
          </tr>
          <tr>
            <td className="fw600">14:30</td>
            <td>Background horizontal bold shadow asset auto flows.</td>
            <td>Mask link reesizing scale vector invite scale.</td>
          </tr>
          <tr>
            <td className="fw600">14:45</td>
            <td>Thumbnail object mask reesizing main connection.</td>
            <td>Thumbnail blur component mask hand edit rectangle.</td>
          </tr>
          <tr>
            <td className="fw600">15:00</td>
            <td>Comment pixel effect overflow slice.</td>
            <td>Scale thumbnail reesizing layout mask content device.</td>
          </tr>
          <tr>
            <td className="fw600">15:15</td>
            <td>Font figma underline text line.</td>
            <td>Background group object library draft ellipse line variant.</td>
          </tr>
          <tr>
            <td className="fw600">15:30</td>
            <td>Pen font selection scrolling create vector.</td>
            <td>Union undo line library ellipse horizontal main ellipse.</td>
          </tr>
        </tbody>
      </table>
      <div className="break">
        <span>15:45</span>
        <p>BREAK</p>
      </div>
      <table className="talks-table">
        <thead>
          <tr className="header">
            <th>
              <h4>Talks</h4>
            </th>
            <th>
              <div className="stage-flex">
                <div className="stage-flex">
                  <span>Stage A</span>
                  <div className="vline"></div>
                  <div className="categoria-table">
                    <p>Commerce</p>
                    <div
                      className="punto"
                      style={{ background: "#FBDC3C" }}
                    ></div>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div className="stage-flex">
                <span>Stage B</span>
                <div className="vline"></div>
                <div className="categoria-table">
                  <p>Fintech</p>
                  <div
                    className="punto"
                    style={{ background: "#1DBFF3" }}
                  ></div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fw600">16:15</td>
            <td>Strikethrough star distribute device library.</td>
            <td>Union select bold plugin slice component pen.</td>
          </tr>
          <tr>
            <td className="fw600">16:30</td>
            <td>Background horizontal bold shadow asset auto flows.</td>
            <td>Mask link reesizing scale vector invite scale.</td>
          </tr>
          <tr>
            <td className="fw600">16:45</td>
            <td>Thumbnail object mask reesizing main connection.</td>
            <td>Thumbnail blur component mask hand edit rectangle.</td>
          </tr>
          <tr>
            <td className="fw600">17:00</td>
            <td>Comment pixel effect overflow slice.</td>
            <td>Scale thumbnail reesizing layout mask content device.</td>
          </tr>
        </tbody>
      </table>
      <div className="break">
        <span>17:15</span>
        <p>Cierre</p>
      </div>
    </>
  );
};

export default LineUpTableDia2;
