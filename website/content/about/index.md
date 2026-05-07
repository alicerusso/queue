# RFC Editor Queue

As streams approve documents for publication, they enter the [publication queue](https://queue.rfc-editor.org), which provides information about documents as they progress through the [RFC editorial process](https://authors.ietf.org/en/rfc-publication-process). The queue is also available as an [XML file](//api/v1/queue.xml).

## Status

- **Awaiting Editor Assignment** - The document is not being edited.
- **In Progress (First Edit)** - The document is being edited.
- **In Progress (Second Edit)** -  The document is getting a second review with a focus on any complex issues or text regarding IANA actions.
- **In Final Review** - Awaiting final approval(s) from authors and/or action holders; click "more details" to see the Final Review status.
- **blocked** - The document is not moving forward. This can be for various reasons:
  - **Author Input Required** - The RFC Production Center is awaiting a reply from the author.
  - **Waiting for Action Holder** - The  RFC Production Center is awaiting a reply from an action holder (for example, an Area Director).
  - **Reference Not Received** - The document has a normative reference to an Internet-Draft that is not yet in the queue.
  - **Reference Not Received (2nd Generation)** - The document has a normative reference to a document that normatively references an Internet-Draft that is not yet in the queue.
  - **Reference Not Received (3rd Generation)** - The document has a normative reference to a document that normatively references a document that normatively references an Internet-Draft that is not yet in the queue.
  - **Stream Hold** - The document is being held per the request of the publication stream that approved it. See details on streams on [What is an RFC?](https://www.rfc-editor.org/series/rfc/).

## Labels

- **github** - GitHub will be used for Final Review, per the authors' request. (See details on [GitHub Pilot](https://rpc-wiki.rfc-editor.org/doku.php?id=rpc-github-phase-0-pilot-test)).
- **markdown** - The author-provided markdown file is being edited, per the authors' request. (See details on [kramdown-rfc Pilot](https://rpc-wiki.rfc-editor.org/doku.php?id=pilot_test_instructions_completing_auth48_using_kramdown)).
- **Expedited** - The processing of this document is being expedited per the request of the publication stream.

## More Details on Final Review

During the [Final Review process](https://authors.ietf.org/en/rfc-publication-process#authors-final-approval-auth48) for a given document, the edited document is reviewed by the authors before publication. The status of approvals from each author and any action holders are listed on the Final Review page. All emails regarding Final Review are in the [mail archive](https://mailarchive.ietf.org/arch/browse/auth48archive/).
