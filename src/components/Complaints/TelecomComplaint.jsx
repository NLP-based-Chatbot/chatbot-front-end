import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  heading: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "24px",
  },
  sub_heading: {
    textAlign: "left",
    fontSize: "15px",
    marginTop: "10px",
  },
  content: {
    textAlign: "left",
    fontSize: "10px",
    marginTop: "5px",
  },
});

const TelecomComplaint = ({ issue, description, name, phone, email }) => (
  <Document
    title="Telecom Complaint Form"
    author="Wingman Inc."
    subject="Submitted Complaint Form View"
  >
    <Page size="A4">
      <Image
        src="/Complaint_heading_telecom.png"
        style={{ width: "100%", height: "auto" }}
      />
      <Text style={styles.heading}>Complaint Form Preview</Text>
      <View style={{ margin: "50px" }}>
        <Text style={styles.sub_heading}>Issue</Text>
        <Text style={styles.content}>{issue}</Text>
        <Text style={styles.sub_heading}>Description</Text>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.sub_heading}>Name of the complainer</Text>
        <Text style={styles.content}>{name}</Text>
        <Text style={styles.sub_heading}>Phone number of the complainer</Text>
        <Text style={styles.content}>{phone}</Text>
        <Text style={styles.sub_heading}>Email address of the complainer</Text>
        <Text style={styles.content}>{email}</Text>
      </View>
      <Image
        src="/complaint_footer.png"
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          bottom: "0px",
        }}
      />
    </Page>
  </Document>
);

export default TelecomComplaint;
