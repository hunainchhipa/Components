import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";

const HTMLToImage = () => {
  const contentRef = useRef();
  const [image, setImage] = useState(null);

  //   base 64
  //   const handleGenerateImage = () => {
  //     if (contentRef.current) {
  //       html2canvas(contentRef.current).then((canvas) => {
  //         const image = canvas.toDataURL("image/png");
  //         // You can now use the image URL as needed, for example:
  //         console.log(image);
  //         setImage(image);
  //         // Or you can create a link to download the image
  //         //   const link = document.createElement("img");
  //         //   link.href = image;
  //         //   link.src = "agreement.png";
  //         // link.click();
  //       });
  //     }
  //   };

  //   blob URL
  const handleGenerateImage = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current).then((canvas) => {
        canvas.toBlob((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          console.log(blobUrl);
          setImage(blobUrl);

          // Or you can create an img element to display the image
          const imgElement = document.createElement("img");
          imgElement.src = blobUrl;
          //   document.body.appendChild(imgElement);

          // Or you can create a link to download the image
          //   const link = document.createElement("a");
          //   link.href = blobUrl;
          //   link.download = "agreement.png";
          //   link.textContent = "Download Agreement Image";
          //   document.body.appendChild(link);
        }, "image/png");
      });
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div ref={contentRef} className="template_view_inr p-5 w-75">
            <div className="template_view_heading d-flex justify-content-center pb-3">
              <h5>NON-DISCLOSURE AGREEMENT (NDA)</h5>
            </div>
            <div className="template_view_content">
              <div>
                <p>
                  This Nondisclosure Agreement or ("Agreement") has been entered
                  into on the date of ______________________________ and is by
                  and between:
                  <br></br>
                  <strong>Party Disclosing Information</strong>:
                  ______________________________ with a mailing address of
                  ____________________________________________________________
                  (“Disclosing Party”).
                  <br></br>
                  <strong>Party Receiving Information</strong>:
                  ______________________________ with a mailing address of
                  ____________________________________________________________
                  (“Receiving Party”).
                  <br></br>
                  For the purpose of preventing the unauthorized disclosure of
                  Confidential Information as defined below. The parties agree
                  to enter into a confidential relationship concerning the
                  disclosure of certain proprietary and confidential information
                  ("Confidential Information").
                </p>
              </div>
              <div>
                <p>
                  1. <strong>Definition of Confidential Information</strong>:
                  For purposes of this Agreement, "Confidential Information"
                  shall include all information or material that has or could
                  have commercial value or other utility in the business in
                  which Disclosing Party is engaged. If Confidential Information
                  is in written form, the Disclosing Party shall label or stamp
                  the materials with the word "Confidential" or some similar
                  warning. If Confidential Information is transmitted orally,
                  the Disclosing Party shall promptly provide writing indicating
                  that such oral communication constituted Confidential
                  Information.
                </p>
              </div>
              <div>
                <p>
                  2. <strong>Exclusions from Confidential Information</strong>:
                  Receiving Party's obligations under this Agreement do not
                  extend to information that is: (a) publicly known at the time
                  of disclosure or subsequently becomes publicly known through
                  no fault of the Receiving Party; (b) discovered or created by
                  the Receiving Party before disclosure by Disclosing Party; (c)
                  learned by the Receiving Party through legitimate means other
                  than from the Disclosing Party or Disclosing Party's
                  representatives; or (d) is disclosed by Receiving Party with
                  Disclosing Party's prior written approval.
                </p>
              </div>
              <div>
                <p>
                  3. <strong>Obligations of Receiving Party</strong>: Receiving
                  Party shall hold and maintain the Confidential Information in
                  strictest confidence for the sole and exclusive benefit of the
                  Disclosing Party. Receiving Party shall carefully restrict
                  access to Confidential Information to employees, contractors
                  and third parties as is reasonably required and shall require
                  those persons to sign nondisclosure restrictions at least as
                  protective as those in this Agreement. Receiving Party shall
                  not, without the prior written approval of Disclosing Party,
                  use for Receiving Party's benefit, publish, copy, or otherwise
                  disclose to others, or permit the use by others for their
                  benefit or to the detriment of Disclosing Party, any
                  Confidential Information. Receiving Party shall return to
                  Disclosing Party any and all records, notes, and other
                  written, printed, or tangible materials in its possession
                  pertaining to Confidential Information immediately if
                  Disclosing Party requests it in writing.
                </p>
              </div>
              <div>
                <p>
                  4. <strong>Time Periods</strong>: The nondisclosure provisions
                  of this Agreement shall survive the termination of this
                  Agreement and Receiving Party's duty to hold Confidential
                  Information in confidence shall remain in effect until the
                  Confidential Information no longer qualifies as a trade secret
                  or until Disclosing Party sends Receiving Party written notice
                  releasing Receiving Party from this Agreement, whichever
                  occurs first.
                </p>
              </div>
              <div>
                <p>
                  5. <strong>Relationships</strong>: Nothing contained in this
                  Agreement shall be deemed to constitute either party a
                  partner, joint venture or employee of the other party for any
                  purpose.
                </p>
              </div>
              <div>
                <p>
                  6. <strong>Severability</strong>: If a court finds any
                  provision of this Agreement invalid or unenforceable, the
                  remainder of this Agreement shall be interpreted so as best to
                  affect the intent of the parties.
                </p>
              </div>
              <div>
                <p>
                  7. <strong>Integration</strong>: This Agreement expresses the
                  complete understanding of the parties with respect to the
                  subject matter and supersedes all prior proposals, agreements,
                  representations, and understandings. This Agreement may not be
                  amended except in writing signed by both parties.
                </p>
              </div>
              <div>
                <p>
                  8. <strong>Waiver</strong>: The failure to exercise any right
                  provided in this Agreement shall not be a waiver of prior or
                  subsequent rights.
                </p>
              </div>
              <div>
                <p>
                  9. <strong>Notice of Immunity</strong>: Employee is provided
                  notice that an individual shall not be held criminally or
                  civilly liable under any federal or state trade secret law for
                  the disclosure of a trade secret that is made (i) in
                  confidence to a federal, state, or local government official,
                  either directly or indirectly, or to an attorney; and (ii)
                  solely for the purpose of reporting or investigating a
                  suspected violation of law; or is made in a complaint or other
                  document filed in a lawsuit or other proceeding, if such
                  filing is made under seal. An individual who files a lawsuit
                  for retaliation by an employer for reporting a suspected
                  violation of law may disclose the trade secret to the attorney
                  of the individual and use the trade secret information in the
                  court proceeding, if the individual (i) files any document
                  containing the trade secret under seal; and (ii) does not
                  disclose the trade secret, except pursuant to court order.
                  <br></br>
                  This Agreement and each party's obligations shall be binding
                  on the representatives, assigns and successors of such party.
                  Each party has signed this Agreement through its authorized
                  representative.
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary me-3"
            onClick={handleGenerateImage}
          >
            Generate Image
          </button>
        </div>
        {image && (
          <>
            <h3>Generated Image:</h3>
            <img src={image} alt="agreement" />
          </>
        )}
      </div>
    </>
  );
};

export default HTMLToImage;
